import React,{useEffect,useRef} from 'react';
import gsap from 'gsap';
 import DateFormat from '../../utilities/dateFormatter';
 import './timeline.css';
 
 export default function Experience(){
    const timelineColors = [
        '#FF5733', // Vivid orange
        '#33FF57', // Bright green
        '#3357FF', // Bright blue
        '#F333FF', // Vivid purple
        '#FF33A1', // Hot pink
        '#FFD733', // Sunny yellow
        '#33FFF6', // Light cyan
        '#FF8C00', // Dark orange
        '#6A5ACD', // Slate blue
        '#FF6347'  // Tomato red
    ];
    const myExperience = [
        {
            companyName:'SayabiDevs',
            date:['01/08/2023','01/10/2024'],
            description:'',
            position:'Web Developer Intern',
            companySite:'',
            expLetterLink:'',
            specialMention:''
        },
        {
            companyName:'SayabiDevs',
            date:['01/08/2023','01/10/2024'],
            description:'',
            position:'Web Developer Intern',
            companySite:'',
            expLetterLink:'',
            specialMention:''
        },
        {
            companyName:'SayabiDevs',
            date:['01/08/2023','01/10/2024'],
            description:'',
            position:'Web Developer Intern',
            companySite:'',
            expLetterLink:'',
            specialMention:''
        },
        {
            companyName:'SayabiDevs',
            date:['01/08/2023','01/10/2024'],
            description:'',
            position:'Web Developer Intern',
            companySite:'',
            expLetterLink:'',
            specialMention:''
        }
    ];
    const timelineItemsRef = useRef([]);
    //giving gsap stagger effect
    useEffect(() => {
        timelineItemsRef.current.forEach((item, index) => {
            const direction = (index + 1) % 2 === 0 ? 1 : -1; // Determine direction
            gsap.fromTo(
                item,
                { x: direction * 200, opacity: 0 }, // Start position
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "bounce.out", // Bounce effect
                    delay: index * 1
                }
            );
        });
    }, []);
    return (
        <div className='body'>
            <h1>Career path</h1>
            <ul>
                {myExperience.map((data, index) => (
                    <li
                        key={index}
                        ref={(el) => (timelineItemsRef.current[index] = el)}
                        style={{ '--accent-color': timelineColors[index % timelineColors.length] }}
                    >
                        <div className="date">{`${DateFormat(data.date[0]).month}, ${DateFormat(data.date[0]).year}`}</div>
                        <div className="title">{data.companyName}</div>
                        <div className="descr">{data.position}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
 }

 //Timeline component of mui
 // <Timeline position='alternate-reverse'>
        // {myExperience.map((data,index) => (
        //     <TimelineItem>
        //         <TimelineOppositeContent>
        //             {
        //                 `${DateFormat(data.date[0]).month}, ${DateFormat(data.date[0]).year}`
        //             }
        //         </TimelineOppositeContent>
        //         <TimelineSeparator>
        //             <TimelineDot 
        //                 variant='outlined' 
        //                 style={{borderColor: timelineColors[index % (timelineColors.length-1)] }}  
        //                 sx={{height:5,width:5}}
        //                 />
        //             <TimelineConnector 
        //                 sx={{
        //                     width: 3, // Adjust width
        //                     height: 100, // Adjust height
        //                     bgcolor: 'outlined'
        //                 }}
        //             />
        //         </TimelineSeparator>
        //         <TimelineContent>
        //             <Box>
        //                 <Typography>

        //                 </Typography>
        //             </Box>
        //         </TimelineContent>
        //     </TimelineItem>
        //         )
        //     )
        // }
        // </Timeline>