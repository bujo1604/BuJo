import React from 'react';

const SVGformat = (props) => {
    const { color, c1, c2, c3 } = props;
    return (
        <div>
      
        <svg width="300" height="300">

            <rect x="0" y="0" width="300" height="300" fillOpacity="0" fill="blue" />
            <ellipse cx="200" cy="145" rx="8" ry="100" fill={c1} transform = "rotate(45 200 145)" />
            <ellipse cx="100" cy="145" rx="8" ry="100" fill={c1} transform = "rotate(-45 100 145)" />
            <ellipse cx="175" cy="210" rx="10" ry="50" fill={c1} />
            <ellipse cx="125" cy="210" rx="10" ry="50" fill={c1} />

            <ellipse cx="150" cy="125" rx="50" ry="45" fill={c1} />
            <rect x="100" y="125" width="100" height="100" fill={color} />

            <ellipse cx="150" cy="125" rx="50" ry="10" fill={c1} />
            <ellipse cx="150" cy="225" rx="50" ry="10" fill={color} />
            <ellipse cx="100" cy="175" rx="10" ry="50" fill={color} />
            <ellipse cx="200" cy="175" rx="10" ry="50" fill={color} />
            <circle cx="175" cy="120" r="3" fill={c2}/>
            <circle cx="125" cy="120" r="3" fill={c2}/>
            <line x1="147" y1="125" x2="153" y2="125" stroke={c3}  />
            <line x1="170" y1="105" x2="180" y2="105" stroke={c3}  />
            <line x1="120" y1="105" x2="130" y2="105" stroke={c3}  />
           <ellipse cx="200" cy="145" rx="10" ry="50" fill={color} transform = "rotate(45 200 145)" />
             <ellipse cx="100" cy="145" rx="10" ry="50" fill={color} transform = "rotate(-45 100 145)" />


        </svg>

      </div>
    )
}

export default SVGformat;