"use client";

import { useEffect, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import "./Modal.css";

type ModalSize = "sm" | "md" | "lg";

type ModalProps = {
  title?: string;
  onClose?: () => void;
  children: ReactNode;
  size?: ModalSize;
  closeOnBackdrop?: boolean;
};

export function Modal({
  title,
  onClose,
  children,
  size = "md",
  closeOnBackdrop = true,
}: ModalProps) {
  useEffect(() => {
    if (!onClose) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  const labelId = title ? "modal-title" : undefined;

  function onOverlayClick() {
    if (closeOnBackdrop && onClose) {
      onClose();
    }
  }

  return (
    <div
      className="modal-overlay"
      onClick={onOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelId}
    >
      <div className={`modal modal--${size}`} onClick={(event) => event.stopPropagation()}>
        {(title || onClose) && (
          <div className="modal__header">
            {title ? (
              <h2 id={labelId} className="modal__title">
                {title}
              </h2>
            ) : null}
            {onClose ? (
              <Button
                className="modal__close"
                size="mini"
                onClick={onClose}
                aria-label="Close modal"
              >
                x
              </Button>
            ) : null}
          </div>
        )}
        <div className="modal__body">{children}</div>
      </div>
    </div>
  );
}

