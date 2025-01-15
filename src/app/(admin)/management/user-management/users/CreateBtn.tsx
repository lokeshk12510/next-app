'use client';
import { useFormDialog } from '@/components/FormDialog';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import React from 'react';

const CreateBtn = () => {
  const { setOpen } = useFormDialog();

  const handleFormDialog = () => {
    setOpen(true);
  };
  return (
    <Button className="h-9 gap-1 uppercase [&_svg]:size-5" onClick={handleFormDialog}>
      <PlusCircle className="fill-white stroke-primary" />
      Create
    </Button>
  );
};

export default CreateBtn;
