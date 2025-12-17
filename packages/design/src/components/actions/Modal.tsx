import React from 'react';

export interface ModalProps extends React.DialogHTMLAttributes<HTMLDialogElement> {
    open?: boolean;
    onClose?: () => void;
    actions?: React.ReactNode;
}

export const Modal = React.forwardRef<HTMLDialogElement, ModalProps>(
    ({ children, open, onClose, actions, className = '', ...props }, ref) => {
        return (
            <dialog
                ref={ref}
                className={`modal ${open ? 'modal-open' : ''} ${className}`}
                {...props}
            >
                <div className="modal-box">
                    {onClose && (
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}>✕</button>
                        </form>
                    )}
                    {children}
                    {actions && <div className="modal-action">{actions}</div>}
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button onClick={onClose}>close</button>
                </form>
            </dialog>
        );
    }
);
Modal.displayName = 'Modal';
