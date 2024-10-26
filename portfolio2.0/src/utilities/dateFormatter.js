
export default function DateFormat(date,monthName=true){
    const monthMap = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    const formattedDate = {
        date:'',
        month:'',
        year:''
    };
    if(monthName){
        [formattedDate.day, formattedDate.month, formattedDate.year] = date.split('/');
        formattedDate.month = monthMap[parseInt(formattedDate.month)-1];
    }
    else{
        [formattedDate.day, formattedDate.month, formattedDate.year] = date.split('/');
    }
    
    return formattedDate;
}