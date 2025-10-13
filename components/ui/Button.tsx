import { ButtonHTMLAttributes, HTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes = cva('"border rounded-full h-10 px-6 font-medium"', {
    variants : {
        variant : {
            primary : 'bg-[#C8FF00] text-neutral-950 border-lime-400',
            secondary : 'border border-white text-white bg-transparent',
        },
        size : {
            sm : 'h-6',
        }
    }
})

export default function Button(
    props : {
        variant : "primary" | "secondary";
        size? : "sm"
    } & 
        ButtonHTMLAttributes<HTMLButtonElement>
    ) {
        const { variant, className, size, ...otherProps } = props;
    return (
        <button 
        className = {classes({ 
            variant,
            size,
            className
        })}
        {...otherProps}
        />
    )
}