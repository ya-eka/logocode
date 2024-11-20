const currentString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla suscipit erat eu dolor mattis vehicula. Quisque tempor vulputate nunc, vel euismod mi rutrum ac. Morbi eget viverra turpis, ut ullamcorper velit. Curabitur rhoncus eu eros quis vulputate. In lobortis, nibh quis aliquet rhoncus, lectus mi auctor libero, nec interdum augue nibh vitae urna. Vestibulum vel sollicitudin nibh. Maecenas venenatis malesuada scelerisque. Cras dapibus leo ut quam aliquam congue';

function cutString(currentString) { 
    let stringLength = currentString.length;
    if (stringLength != 0 && stringLength >= 50) {   
        let newString = currentString.slice(0,50) + '...';
        return newString
    }
    return 'Строка содержит меньше 50 символов'
};

console.log(cutString(currentString))