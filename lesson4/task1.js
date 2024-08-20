const familyStatus = {
    single: 'не женат/не замужем', 
    engaged: 'помолвлен/помолвлена', 
    married: 'женат/замужем'
};

let aboutMe = {
    name:'Kate',
    age: 25,
    haveChildren: true,
    status: familyStatus.single    
};

console.log(
    typeof aboutMe,
    typeof aboutMe.name,
    typeof aboutMe.age, 
    typeof aboutMe.haveChildren,
    typeof aboutMe.status
);
