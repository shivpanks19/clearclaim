export type Cursor =
	| 'cursor-auto'
	| 'cursor-default'
	| 'cursor-pointer'
	| 'cursor-wait'
	| 'cursor-text'
	| 'cursor-move'
	| 'cursor-help'
	| 'cursor-not-allowed';

export type BackgroundVariant =
	| 'bg-primary'
	| 'bg-secondary'
	| 'bg-muted'
	| 'bg-black'
	| 'bg-white'
	| 'bg-transparent'
	| 'bg-current';

export type Shadow =
	| 'shadow-none'
	| 'shadow-sm'
	| 'shadow'
	| 'shadow-md'
	| 'shadow-lg'
	| 'shadow-xl'
	| 'shadow-2xl'
	| 'shadow-inner';

export type Rounded =
	| 'rounded-none'
	| 'rounded-sm'
	| 'rounded'
	| 'rounded-md'
	| 'rounded-lg'
	| 'rounded-xl'
	| 'rounded-2xl'
	| 'rounded-3xl'
	| 'rounded-full';

export type TextVariant =
	| 'text-primary'
	| 'text-secondary'
	| 'text-muted'
	| 'text-black'
	| 'text-white'
	| 'text-transparent'
	| 'text-current';

export type FontStyle = 'not-italic' | 'italic';

export type FontSize =
	| 'text-xs'
	| 'text-sm'
	| 'text-base'
	| 'text-lg'
	| 'text-xl'
	| 'text-2xl'
	| 'text-3xl'
	| 'text-4xl'
	| 'text-5xl'
	| 'text-6xl'
	| 'text-7xl';

export type FontWeight =
	| 'font-thin'
	| 'font-extralight'
	| 'font-light'
	| 'font-normal'
	| 'font-medium'
	| 'font-semibold'
	| 'font-bold'
	| 'font-extrabold';

export type TextAlign = 'text-left' | 'text-center' | 'text-right' | 'text-justify';
