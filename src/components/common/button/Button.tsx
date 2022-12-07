import React from 'react';
import styl from '@/styles/Button.module.scss';

const Button: React.FC<{children?:any, className?:string}> = ({children, className})=>{
	return(
		<button className={styl.className}>{children}</button>
	)
}

export default Button;