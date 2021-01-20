import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { get } from 'http';
import { CreateMovieDto } from './dto/create-movie.dto';
import { MoviesService } from './movies.service';


@Controller('movies')
export class MoviesController {
    constructor(private readonly moviesService:MoviesService){

    }
    @Get()
    getAll(){
        return this.moviesService.getAll();
    }

    @Get('search')
    search(@Query('year') searchYear:number){
        return  `We are searching for a movie made after:${searchYear}`;
    }

    @Get('/:id')
    getOne(@Param('id') movieId:number){
        console.log(typeof movieId);
        return this.moviesService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData: CreateMovieDto){
     return this.moviesService.create(movieData);
    }

    @Delete('/:id')
    remove(@Param('id') movieId:number){
        return this.moviesService.deleteOne(movieId);
    }

    @Patch('/:id')
    patch(@Param('id') movieId:number,@Body() updateData: CreateMovieDto){
        return this.moviesService.update(movieId,updateData);
    }
}
