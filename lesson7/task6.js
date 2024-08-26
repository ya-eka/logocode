let num = 0;

while (num < 50)
{
    if ((num % 3 == 0) & (num % 5 == 0)) {
        console.log('JavaScript');
    } else if (num % 3 == 0) {
        console.log('Java');
    } else if (num % 5 == 0) {
        console.log('Script');
    } else {
    console.log(num);
    };
    num++;
}