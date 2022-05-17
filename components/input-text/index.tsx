import { InputIcon } from "../input-icon";

type Props = {
  label: string;
  placeholder: string;
  type: string;
};

export function InputText({ ...props }: Props) {
  return (
    <>
      <div className="flex mb-14">
        <div className="bg-indigo-100 w-16 mr-7">
          <InputIcon size={24} color="#503E9D" />
        </div>
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-gray-800">
            {props.label}
          </label>
          <input
            type={props.type}
            placeholder={props.placeholder}
            className="w-full py-3 border-b"
          />
        </div>
      </div>
    </>
  );
}
