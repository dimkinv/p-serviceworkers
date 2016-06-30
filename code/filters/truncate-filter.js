app.filter('truncateFilter', function(){
   return function(str, length){
       if(str.length + 3 <= length){
           return str;
       }

       if(str[length - 1] === ' '){
           return str.substring(0, length - 1) + '...';
       }

       var char;
       var index = length;
       while(char !== ' ' && index !== 0){
           index--;
           char = str[index];
       }

       return (index === 0) ? str : str.substring(0, index) + '...';
   }
});
