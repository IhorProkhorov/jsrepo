"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count  = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count  = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    togglevisiableMyDb: function(){
        if(personalMovieDB.privat){
            personalMovieDB.privat = false;
        }else{
            personalMovieDB.privat = true;
        }
    },
    showMyDB: function(){
        if(personalMovieDB.privat == false){
            console.log(personalMovieDB);
        }
    },
    rememberMyFilms: function(){
        let i = 0;
        while( i < 2){
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его', '');
                    if( a != null && b != null && a.length <= 50 && a != '' && b != ''  ){ 
                        personalMovieDB.movies[a] = b;
                        console.log('done');
                    } else {
                        console.log('error');
                        i--;
                    }
                    i++;
        }    
    },
    detectPersonalLevel: function(){
        if (personalMovieDB.count < 10){
            console.log("Просмотрено мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30){
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count > 30){
            console.log("Вы киноман");
        } else {
            console.log("Error");
        }    
    },
    writeYourGenres: function(){
        let count = 1;
        while(count <= 3){
            personalMovieDB.genres[count - 1] = prompt(`Ваш любимый жанр под номером ${count}`, '');
            
            while( personalMovieDB.genres[count - 1] == '' || personalMovieDB.genres[count - 1] == null){
                personalMovieDB.genres[count - 1] = prompt(`Ваш любимый жанр под номером ${count}`, '');
            }

            count++;
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};


// for(let i = 0; i <2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//               b = prompt('На сколько оцените его', '');
//         if( a != null && b != null && a.length <= 50 && a != '' && b != ''  ){ 
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
// }
