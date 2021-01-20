import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { get } from 'http';
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
    search(@Query('year') searchYear:string){
        return  `We are searching for a movie made after:${searchYear}`;
    }

    @Get('/:id')
    getOne(@Param('id') movieId:string){
        return this.moviesService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData){
     return this.moviesService.create(movieData);
    }

    @Delete('/:id')
    remove(@Param('id') movieId:string){
        return this.moviesService.deleteOne(movieId);
    }

    @Patch('/:id')
    patch(@Param('id') movieId:string,@Body() updateData){
        return {updatedMovie:movieId,
        ...updateData}
    }
}
