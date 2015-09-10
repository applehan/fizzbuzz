
function b(n) {
    var i = n;
    $:
        while(++i) {
            if(i % 3)
                if(i % 5) 
                    console.log(i);
                else 
                    console.log('FizzBuzz');
            else if(i % 5) 
                console.log('Buzz');
            else 
                console.log('Fizz');
            if(i >= 100) 
                break $;
        }
    return;
}