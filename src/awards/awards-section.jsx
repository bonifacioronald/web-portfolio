import React, { useState } from "react";
import "./awards.css";
import 'bootstrap/dist/css/bootstrap.css';

function AwardsSection() {

    const [currentHoveredIndex, setHoveredAward] = useState(null);

    const awards = [
        {
            'title': 'Global Top 100',
            'competiton': 'GDSC Solution Challenge 2023',
            'organizer': 'Google',
            'date': 'Jun 2023',
            'url': 'https://www.linkedin.com/posts/bonifacio-ronald_googlesolution-hackathon-sdgs-activity-7072116882618654720-5Xoc?utm_source=share&utm_medium=member_desktop'
        },
        {
            'title': '1st Runner-Up',
            'competiton': 'Reimagining Foldables UI/UX Hackathon',
            'organizer': 'Samsung Malaysia',
            'date': 'Jun 2023',
            'url': 'https://www.linkedin.com/posts/bonifacio-ronald_technology-innovation-foldablephone-activity-7077144373154508800-B7PS?utm_source=share&utm_medium=member_desktop'
        },
        {
            'title': 'Best Visual Application',
            'competiton': 'ImagineHack 2023',
            'organizer': 'Taylor’s University Agent of Tech ',
            'date': 'May 2023',
            'url': 'https://www.linkedin.com/posts/bonifacio-ronald_ai-flutter-flutterdeveloper-activity-7073157634467532801-umUY?utm_source=share&utm_medium=member_desktop'
        },
        {
            'title': '1st National Runner-Up',
            'competiton': 'KitaHack 2023',
            'organizer': 'GDSC Malaysia',
            'date': 'Mar 2023',
            'url': 'https://www.linkedin.com/posts/bonifacio-ronald_kitahack2023-hackathon-flutter-activity-7041380279051010048-cwYD?utm_source=share&utm_medium=member_desktop'
        },
        {
            'title': 'Champion',
            'competiton': 'Start-Up Business Challenge 2023',
            'organizer': 'Univesiti Malaya',
            'date': 'May 2023',
            'url': 'https://www.linkedin.com/posts/bonifacio-ronald_business-entrepreneurship-startup-activity-7074946988852596736-b5Lf?utm_source=share&utm_medium=member_desktop'
        }
    ]

    return (
        <div className="awards-layout">
            {
                awards.map((award, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <a href={award.url}>
                            <div className={`award-container ${currentHoveredIndex === index ? '' : 'darkened'} ${isEven ? '' : 'lowered'}`}
                            onMouseEnter={() => setHoveredAward(index)}
                            onMouseLeave={() => setHoveredAward(null)}>
                            <div >
                                <p className="award-competition cutive-mono-regular"><b>{award.competiton}</b></p>
                                <p className="award-info">{award.organizer}<br/>{award.date}</p>
                            </div>
                            <div className="award-title">
                                <h1>{award.title}</h1>
                                <i class="fa fa-external-link"></i>
                            </div>
                        </div>
                        </a>
                    )
                })
            }
        </div>
    );
}

export default AwardsSection;