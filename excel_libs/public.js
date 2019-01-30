function JoinGroupID(e){
    var name = '';
    switch(e){      
    //   case '1': name = 'Yyn0';break;
    //   case '2': name = 'Dyn11';break;
    //   case '3': name = 'Yd11';break;
    //   case '4': name = 'Dy11';break;
    //   case '5': name = 'Dyn5';break;
    //   case '6': name = 'Dy5';break;
    //   case '7': name = 'Ii0(Ii12)';break;
    //   case '8': name = 'Ii6';break;
  
      case 'Yyn0'     : name = 1;break;
      case 'Dyn11'    : name = 2;break;
      case 'Yd11'     : name = 3;break;
      case 'Dy11'     : name = 4;break;
      case 'Dyn5'     : name = 5;break;
      case 'Dy5'      : name = 6;break;
      case 'Ii0(Ii12)': name = 7;break;
      case 'Ii6'      : name = 8;break;
    }
    return name;
  }