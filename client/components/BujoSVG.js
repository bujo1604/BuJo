import React from 'react';

// let keyframes =
//     `@-webkit-keyframes animation {
//         10% {-webkit-fill:red}
//         90% {-webkit-fill:blue}
//         100% {-webkit-fill:green}
//     }`

// let style = {
//     'animation': keyframes
// }


const BujoSVG = (props) => {
    const { color, c1, c2, c3 } = props;
    return (
        <div>
            <svg width="300" height="300">

                <ellipse className='arms' cx="200" cy="145" rx="8" ry="85" fill={c1} transform="rotate(45 200 145)" >
                    <animateTransform attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        values="30 200 145; 40 200 145; 30 200 145"
                        keyTimes="0; 0.5; 1"
                        dur=".5s"
                        repeatCount="indefinite" />
                </ellipse>
                <ellipse className='arms' cx="100" cy="145" rx="8" ry="85" fill={c1} transform="rotate(-45 100 145)" >
                    <animateTransform attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        values="-30 100 145; -40 100 145; -30 100 145"
                        keyTimes="0; 0.5; 1"
                        dur=".5s"
                        repeatCount="indefinite" />
                </ellipse>
                <ellipse cx="175" cy="210" rx="10" ry="50" fill={c1} />
                <ellipse cx="125" cy="210" rx="10" ry="50" fill={c1} />

                <ellipse cx="150" cy="125" rx="50" ry="45" fill={c1} />
                <rect x="100" y="125" width="100" height="100" fill={color} />

                <ellipse cx="150" cy="125" rx="50" ry="10" fill={c1} />
                <ellipse cx="150" cy="225" rx="50" ry="10" fill={color} />
                <ellipse cx="100" cy="175" rx="10" ry="50" fill={color} />
                <ellipse cx="200" cy="175" rx="10" ry="50" fill={color} />
                <circle cx="175" cy="120" r="3" fill={c2} />
                <circle cx="125" cy="120" r="3" fill={c2} />
                <line x1="147" y1="125" x2="153" y2="125" stroke={c3} />
                <line x1="170" y1="105" x2="180" y2="105" stroke={c3} />
                <line x1="120" y1="105" x2="130" y2="105" stroke={c3} />
                <ellipse className='arms' cx="200" cy="145" rx="10" ry="50" fill={color} transform="rotate(45 200 145)" >
                    <animateTransform attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        values="30 200 145; 40 200 145; 30 200 145"
                        keyTimes="0; 0.5; 1"
                        dur=".5s"
                        repeatCount="indefinite" />
                </ellipse>
                <ellipse className='arms' cx="100" cy="145" rx="10" ry="50" fill={color} transform="rotate(-45 100 145)" >
                    <animateTransform attributeName="transform"
                        attributeType="XML"
                        type="rotate"
                        values="-30 100 145; -40 100 145; -30 100 145"
                        keyTimes="0; 0.5; 1"
                        dur=".5s"
                        repeatCount="indefinite" />
                </ellipse>
            </svg>

        </div>
    )
}

export default BujoSVG;
