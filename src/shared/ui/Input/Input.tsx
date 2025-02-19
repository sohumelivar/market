import React from 'react';
import classNames from "classnames";
import styles from './Input.module.scss';
import { addHashToClasses } from '@shared/lib/addHashToClasses';

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({
    className,
    ...props
 }) => {

    const inputClasses = classNames(styles.button, addHashToClasses({styles, className}));

    return (
        <div >
            <input
                className={inputClasses}
                {...props}
            />
        </div>
    )
}