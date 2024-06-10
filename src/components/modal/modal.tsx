import { closeModalById } from "../../utils";
import type * as T from "./types";

export const Modal = ({ id, title, children }: T.Props) => {
  return (
    <dialog id={id} className="modal modal-bottom sm:modal-middle">
      <div className="modal-box relative flex flex-col gap-4">
        <h3 className="text-lg font-bold">{title}</h3>

        <button
          type="button"
          onClick={() => closeModalById(id)}
          className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2"
        >
          ✕
        </button>

        {children}
      </div>

      <form method="dialog" className="modal-backdrop">
        <button type="button">close</button>
      </form>
    </dialog>
  );
};
