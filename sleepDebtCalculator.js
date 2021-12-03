const getSleepHours = day =>{
    const getSleep = day.toLowerCase();
    switch(getSleep){
      case 'monday':
        return 8;
        break ;
      case 'tuesday':
        return 5;
        break ;
      case 'wednesday':
        return 7;
        break ;
      case 'thursday':
        return 9;
        break ;
      case 'friday':
        return 5;
        break ;
      case 'saturday':
        return 7;
        break ;
      case 'sunday':
        return 8;
        break ;
      default: 
      return 'Error!!'
    }
  };
  
  
  //const getActualSleepHours = () => 8 + 5 + 7 + 9 + 5 + 7 + 8;
  
  
  const getActualSleepHours = () =>
  getSleepHours('monday') + 
  getSleepHours('tuesday') + 
  getSleepHours('wednesday') + 
  getSleepHours('thursday') + 
  getSleepHours('friday') + 
  getSleepHours('saturday') + 
  getSleepHours('sunday');
  
  
  //const getIdealSleepHours = idealHours => idealHours * 7;
  const getIdealSleepHours = () =>{
      const idealHours = 8;
      return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours){
      console.log('You got perfect amount of sleep');
    } else if (actualSleepHours > idealSleepHours){
      console.log('You got ' + (actualSleepHours - idealSleepHours) + ' more sleep');
    } else if (actualSleepHours < idealSleepHours){
      console.log('You need '  + (idealSleepHours-actualSleepHours) + ' more sleep');
    }
  };
  
  calculateSleepDebt();
  
  
  
