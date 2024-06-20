// 1 : Program to print the perfect times count in the array of objects
// input: arr = [{Time1:"10:45", Time2:"12:50", Time3:"11:00"}]
// output: 1

// Code :

let arr1 = [{Time1:"10:45", Time2:"12:50", Time3:"11:00"}];
let count=0;
for(i of arr1)
    {
        for(j in i)
            {
                let arr=i[j].split(":")
                if(arr[1]=="00")
                    {
                        count=count+1;
                    }
            }
    }
console.log(count);


// 2 : Program to print the rest of the minutes to become a perfect time.
// input: arr = [{Time1:"10:45", Time2:"12:50", Time3:"11:00"}]
// output: 
// Time1: 15 min
// Time2: 10 min

// Code : 

let arr2 = [{Time1:"10:45", Time2:"12:50", Time3:"11:00"}];
for(i of arr2)
    { 4
        for(j in i)
            {
                let arr=i[j].split(":")
                if(arr[1]!="00")
                    {
                        let mins=60-arr[1];
                        console.log(`${j}: ${mins} mins`);
                    }
            }
    }


// 3 : Program to print the next perfect time near to the given times.
// input: arr = [{Time1:"10:45", Time2:"12:50", Time3:"11:00"}]
// output: 
// Time1: 11:00
// Time2: 01:00

// Code :

let arr3 = [{Time1:"10:45", Time2:"12:50", Time3:"11:00"}];
for(i of arr3)
    {
        for(j in i)
            {
                let arr=i[j].split(":")
                if(arr[1]!="00")
                    {
                       arr[0]=Number(arr[0])+1;
                        // console.log(arr[0]);
                        if(arr[0]>12)
                        {
                           arr[0]=arr[0]-12;
                        }  
                        if(arr[0]<10)
                        console.log(`${j} : 0${arr[0]}:00`)  
                        else
                        console.log(`${j} : ${arr[0]}:00`)    

                    }
            }
    }
