import { useState } from "react";
import "./ChangeScope.css";

export type ScopeRole = "owner" | "admin" | "moderator" | "participant";

export interface ChangeScopeProps {
  /** Currently selected role */
  selectedRole?: ScopeRole;
  /** Available roles to choose from */
  roles?: ScopeRole[];
  /** Whether the dialog is visible */
  open?: boolean;
  /** Callback when cancel is clicked */
  onCancel?: () => void;
  /** Callback when save is clicked with the selected role */
  onSave?: (role: ScopeRole) => void;
}

const roleLabels: Record<ScopeRole, string> = {
  owner: "Owner",
  admin: "Admin",
  moderator: "Moderator",
  participant: "Participant",
};

export function ChangeScope({
  selectedRole = "moderator",
  roles = ["owner", "admin", "moderator", "participant"],
  open = true,
  onCancel,
  onSave,
}: ChangeScopeProps) {
  const [currentRole, setCurrentRole] = useState<ScopeRole>(selectedRole);

  if (!open) return null;

  return (
    <div className="change-scope">
      <div className="change-scope__content">
        {/* Icon */}
        <div className="change-scope__icon">
          <span className="change-scope__icon-inner">
            <ChangeScopeIcon />
          </span>
        </div>

        {/* Text */}
        <div className="change-scope__text">
          <div className="change-scope__title">Change Scope</div>
          <div className="change-scope__description">
            You can change roles to manage group permissions and responsibilities.
          </div>
        </div>

        {/* Role list */}
        <div className="change-scope__list">
          {roles.map((role) => (
            <label
              key={role}
              className={`change-scope__item ${currentRole === role ? "change-scope__item--selected" : ""}`}
            >
              <span className={`change-scope__radio ${currentRole === role ? "change-scope__radio--checked" : ""}`}>
                {currentRole === role && <span className="change-scope__radio-dot" />}
              </span>
              <span className="change-scope__item-label">{roleLabels[role]}</span>
              <input
                type="radio"
                name="scope-role"
                value={role}
                checked={currentRole === role}
                onChange={() => setCurrentRole(role)}
                className="change-scope__input"
              />
            </label>
          ))}
        </div>

        {/* Buttons */}
        <div className="change-scope__buttons">
          <button type="button" className="change-scope__btn change-scope__btn--cancel" onClick={onCancel}>
            Cancel
          </button>
          <button type="button" className="change-scope__btn change-scope__btn--save" onClick={() => onSave?.(currentRole)}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

function ChangeScopeIcon() {
  return (
    <svg viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.9 26.258C18.767 26.278 17.669 26.13 16.606 25.812C15.543 25.494 14.621 24.944 13.839 24.162C13.146 23.469 12.615 22.684 12.246 21.806C11.877 20.928 11.693 20.003 11.693 19.031C11.693 18.646 11.716 18.276 11.762 17.921C11.808 17.566 11.893 17.213 12.019 16.862C12.127 16.539 12.118 16.219 11.994 15.902C11.87 15.585 11.663 15.363 11.373 15.235C11.063 15.107 10.754 15.11 10.448 15.244C10.142 15.379 9.935 15.608 9.827 15.931C9.66 16.431 9.532 16.934 9.443 17.441C9.353 17.947 9.308 18.467 9.308 19C9.308 20.295 9.556 21.532 10.054 22.71C10.551 23.888 11.254 24.931 12.162 25.839C13.126 26.836 14.27 27.553 15.596 27.989C16.922 28.425 18.28 28.653 19.67 28.673L18.281 30.062C18.045 30.298 17.924 30.574 17.918 30.891C17.911 31.207 18.032 31.49 18.281 31.739C18.53 31.987 18.809 32.112 19.119 32.112C19.429 32.112 19.709 31.987 19.958 31.739L23.081 28.616C23.442 28.254 23.623 27.832 23.623 27.35C23.623 26.868 23.442 26.446 23.081 26.085L19.958 22.962C19.722 22.726 19.446 22.604 19.129 22.598C18.812 22.592 18.53 22.713 18.281 22.962C18.032 23.21 17.908 23.49 17.908 23.8C17.908 24.11 18.032 24.39 18.281 24.639L19.9 26.258ZM18.089 11.712C19.222 11.712 20.325 11.871 21.398 12.189C22.471 12.507 23.399 13.057 24.181 13.839C24.873 14.531 25.404 15.316 25.773 16.194C26.142 17.072 26.327 17.997 26.327 18.969C26.327 19.354 26.304 19.724 26.258 20.079C26.212 20.434 26.126 20.787 26 21.139C25.892 21.462 25.901 21.787 26.025 22.114C26.149 22.441 26.356 22.668 26.646 22.796C26.956 22.924 27.265 22.924 27.571 22.796C27.877 22.668 28.085 22.442 28.193 22.119C28.359 21.619 28.487 21.108 28.577 20.585C28.667 20.062 28.712 19.533 28.712 19C28.712 17.705 28.473 16.469 27.996 15.291C27.519 14.112 26.817 13.059 25.889 12.131C24.904 11.133 23.749 10.422 22.423 9.996C21.097 9.57 19.74 9.358 18.35 9.358L19.769 7.939C19.985 7.703 20.096 7.426 20.102 7.11C20.108 6.793 19.987 6.51 19.739 6.262C19.49 6.013 19.21 5.889 18.9 5.889C18.59 5.889 18.31 6.013 18.062 6.262L14.939 9.385C14.577 9.746 14.396 10.168 14.396 10.65C14.396 11.132 14.577 11.554 14.939 11.916L18.062 15.039C18.298 15.275 18.574 15.396 18.891 15.402C19.207 15.408 19.49 15.287 19.739 15.039C19.987 14.79 20.112 14.51 20.112 14.2C20.112 13.89 19.987 13.61 19.739 13.362L18.089 11.712ZM19 38C16.374 38 13.906 37.501 11.595 36.502C9.283 35.503 7.272 34.149 5.562 32.439C3.851 30.728 2.497 28.717 1.498 26.406C0.499 24.094 0 21.626 0 19C0 16.374 0.499 13.906 1.498 11.595C2.497 9.283 3.851 7.272 5.562 5.562C7.272 3.851 9.283 2.497 11.595 1.498C13.906 0.499 16.374 0 19 0C21.626 0 24.094 0.499 26.406 1.498C28.717 2.497 30.728 3.851 32.439 5.562C34.149 7.272 35.503 9.283 36.502 11.595C37.501 13.906 38 16.374 38 19C38 21.626 37.501 24.094 36.502 26.406C35.503 28.717 34.149 30.728 32.439 32.439C30.728 34.149 28.717 35.503 26.406 36.502C24.094 37.501 21.626 38 19 38ZM19 35C23.467 35 27.25 33.45 30.35 30.35C33.45 27.25 35 23.467 35 19C35 14.533 33.45 10.75 30.35 7.65C27.25 4.55 23.467 3 19 3C14.533 3 10.75 4.55 7.65 7.65C4.55 10.75 3 14.533 3 19C3 23.467 4.55 27.25 7.65 30.35C10.75 33.45 14.533 35 19 35Z" fill="currentColor"/>
    </svg>
  );
}
