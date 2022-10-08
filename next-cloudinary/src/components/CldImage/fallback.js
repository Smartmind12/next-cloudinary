import Image from 'next/image';
import React, { useState } from 'react';

const Fallbackimage = (props) => {
    const { src, fallbackSrc, ...imageProps } = props;
    const [CurrentSrc, setCurrentSrc] = useState(src);
    const [UpdatedSrc, setUpdatedSrc] = useState(false);
    if (CurrentSrc!==src)
    { setUpdatedSrc(false)
      setCurrentSrc(src)}
    return (
        <Image
            {...imageProps}
            src={UpdatedSrc?fallbackSrc:src}
            onError={() => {
                setUpdatedSrc(true);
            }}
        />
    );
};

export default Fallbackimage;
