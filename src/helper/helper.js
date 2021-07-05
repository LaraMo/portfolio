import moment from 'moment';

export const getGreetings = () =>{
    const time = moment().hours();
    let msg = "";
    if(time >= 6 && time <= 12){
      msg = "Good morning!";
    }
    else if (time >= 12 && time <= 17){
      msg = "Good afternoon!"
    }
    else {
      msg = "Good evening!";
    }
    return msg;
  }