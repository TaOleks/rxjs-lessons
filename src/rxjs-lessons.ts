import { Observable, debounceTime, map } from "rxjs";

const search$ = new Observable<Event>(observer =>{


  const search = document.getElementById('search')

   if(!search){
    observer.error('Element does not exists on the page')
    return;
   }
  search?.addEventListener('input',event =>{

    observer.next(event)

  })


});


search$.pipe(
  map(event => {
    return (event.target as HTMLInputElement).value;

  }),
   debounceTime(1000))
.subscribe( value=>{
  console.log(value);
  }

)



