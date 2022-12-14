import {gql, useQuery} from "@apollo/client";


interface Film {
  id: number;
  title: string;
  subtitle: string;
}

type FilmQueryResult = { films: Film[] };

const FLIMS_QUERY=gql`

query ExampleQuery {
  films{
    id
    title
    subtitle
  }
}

`;


export default function FilmList():JSX.Element{

  const {data, loading, error}=useQuery<FilmQueryResult>(FLIMS_QUERY);

  if (loading) return <p> ... loading</p>;
  if (error) return <p> ... {error.message}</p>;

  return <pre>{JSON.stringify(data, null, 2)}</pre>


}