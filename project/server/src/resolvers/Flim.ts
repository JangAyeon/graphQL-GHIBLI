import { Query, Resolver } from 'type-graphql';
import ghibliData from '../data/ghibli';
import { Film } from '../entities/Flim';

@Resolver(Film)
export class FilmResolver {
  @Query(() => [Film])
  flims(): Film[] {
    return ghibliData.films;
  }
}
