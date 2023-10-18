'use client'
import axios from 'axios'
import {AiOutlineMail} from 'react-icons/ai';
import {FcGoogle} from 'react-icons/fc';
import { useState, useCallback } from 'react';
import{
  FieldValues,
  SubmitHandler,
  useForm
} from 'react-hook-form'
import useRegisterModal from '@/app/hooks/useRegisterModal';
import Modal from './Modal';

export default function RegisterModal() {
  const registerModal = useRegisterModal();
  const [isLoading,setIsloading] = useState(false);

  const {
    register,
    handleSubmit,
    formState:{
      errors,
    }
  } = useForm<FieldValues>({
    defaultValues:{
      name:'',
      email:'',
      password:''
    }
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsloading(true);
  
    try {
      await axios.post('api/register', data);
      registerModal.onClose();
    } catch (error) {
      console.error(error);
    } finally {
      setIsloading(false);
    }
  };

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      Esaa papá
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title='¡Regístrate!'
      actionLabel='Siguiente'
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  )
}
