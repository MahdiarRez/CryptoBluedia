'use client'

import React, {ReactNode} from 'react';
import {motion} from "motion/react"

function FadeInMotion({children}: { children: ReactNode }) {
    return (
        <motion.div>
            {children}
        </motion.div>
    );
}

export default FadeInMotion;