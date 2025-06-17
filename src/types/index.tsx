export interface inputProps {
  name: string;
  type: string;
  placeholder?: string;
  value?: string;
}


export interface formProps {
  children: React.ReactNode;
  action: (formData: FormData) => void;
  className?: string;
  onSubmit?: () => void;
}


export interface buttonProps {
  type?: "button" | "submit" | "reset";
  text: string | React.ReactNode; // 아이콘 HTML 요소 포함 가능
  onClick?: () => void;
  actionButton?: boolean;
  bgColor?: string;
}


export interface todoProps {
  id: string;
  title?: string | null;
  isCompleted: boolean;
  createdAt?: Date;
}




