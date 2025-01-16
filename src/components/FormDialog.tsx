'use client';

import React, { useState } from 'react';
import { Sheet, SheetContent, SheetTitle } from './ui/sheet';

type FormDialogContext = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  formData?: object;
  setFormData: React.Dispatch<React.SetStateAction<object | undefined>>;
  handleDialogToggle: (data?: object) => void;
};

const FormDialogContext = React.createContext<FormDialogContext | null>(null);

function useFormDialog() {
  const context = React.useContext(FormDialogContext);

  if (!context) {
    throw new Error('useFormDialog must be used within a FormDialogProvider');
  }

  return context;
}

const FormDialogProvider = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ children, ...props }, ref) => {
    const [open, setOpen] = useState(false);
    const [formData, setFormData] = useState<object | undefined>(undefined);

    const handleDialogToggle = (data?: object) => {
      setOpen(o => !o);
      if (data) setFormData(data);
    };

    const contextValue = React.useMemo<FormDialogContext>(
      () => ({
        open,
        setOpen,
        formData,
        setFormData,
        handleDialogToggle,
      }),
      [formData, open],
    );

    return (
      <FormDialogContext.Provider value={contextValue}>
        <div ref={ref} {...props}>
          {children}
        </div>
      </FormDialogContext.Provider>
    );
  },
);

FormDialogProvider.displayName = 'FormDialogProvider';

const FormDialog = ({ children }: { children: React.ReactNode }) => {
  const { open, setOpen } = useFormDialog();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTitle className="hidden"></SheetTitle>
      <SheetContent
        data-sidebar="sidebar"
        data-mobile="true"
        aria-describedby=""
        className="w-[--sidebar-width] bg-card p-0 lg:max-w-max [&>button]:hidden"
        style={
          {
            '--sidebar-width': 500,
          } as React.CSSProperties
        }
        side={'right'}
      >
        <div className="h-full w-full">{children}</div>
      </SheetContent>
    </Sheet>
  );
};

export { FormDialogProvider, useFormDialog, FormDialog };
