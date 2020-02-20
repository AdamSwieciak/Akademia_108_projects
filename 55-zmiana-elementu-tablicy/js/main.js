const func= (arr) => {
   let newarr=arr.map((x)=> {
        if(x>10) {
            return 5
        } else { return x }
    }) 
    return newarr;
} 
['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','r','s','t','u','v','w','x','y','z']
console.log(func([1,4,22]));