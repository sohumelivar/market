import React from 'react';
import classNames from "classnames";
import styles from './Button.module.scss';
import { addHashToClasses } from '@shared/lib/addHashToClasses';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
    className,
    disabled = false,
    children,
    ...props
  }) => {

    const buttonClasses = classNames(styles.button, addHashToClasses({styles, className}), {
        [styles.disabled]: disabled,
    });

    return (
        <button
        className={buttonClasses}
        disabled={disabled}
        {...props}
        >
        {children}
        </button>
    );
};
