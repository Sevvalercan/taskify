'use client';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'danger' | 'success';
}

export default function Button({ children, variant = 'primary', ...props }: ButtonProps) {
  let bgColor = '';

  switch (variant) {
    case 'danger':
      bgColor = '#f44336';
      break;
    case 'success':
      bgColor = '#4CAF50';
      break;
    default:
      bgColor = '#21445B';
  }

  return (
    <button
      {...props}
      style={{
        backgroundColor: bgColor,
        color: 'white',
        padding: '8px 16px',
        border: 'none',
        borderRadius: 4,
        cursor: 'pointer',
        fontWeight: '600',
        userSelect: 'none',
        transition: 'opacity 0.3s',
      }}
      onMouseDown={e => (e.currentTarget.style.opacity = '0.7')}
      onMouseUp={e => (e.currentTarget.style.opacity = '1')}
      onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
    >
      {children}
    </button>
  );
}
