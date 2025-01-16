'use client';

import React from 'react';
import { PlusCircle } from 'lucide-react';

import { useFormDialog } from '@/components/FormDialog';
import { Button } from '@/components/ui/button';

const CreateBtn = () => {
  const { handleDialogToggle } = useFormDialog();

  return (
    <Button className="h-9 gap-1 uppercase [&_svg]:size-5" onClick={handleDialogToggle}>
      <PlusCircle className="fill-white stroke-primary" />
      Create
    </Button>
  );
};

export default CreateBtn;
