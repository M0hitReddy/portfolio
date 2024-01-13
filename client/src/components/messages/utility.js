const months = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
};

const extractTime=(dateTimeString)=> {
    const date = new Date(dateTimeString);

    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const period = hours >= 12 ? 'PM' : 'AM';
    hours = (hours % 12) || 12;

    const formattedTime = `${hours}:${minutes} ${period}`;
    return formattedTime;
}

const extractDate=(dateTimeString)=> {
    const date = new Date(dateTimeString);

    const year = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    // console.log(month);
    const day = date.getDate().toString().padStart(2, '0');
    month = months[Number(month)];

    const formattedDate = `${day} ${month}, ${year}`;
    return formattedDate;
}

export {extractTime,extractDate,months};