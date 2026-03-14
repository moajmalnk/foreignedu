import { useState, useRef, useEffect } from 'react';

export default function CustomSelect({ id, name, value, options, placeholder, onChange, className, 'aria-invalid': ariaInvalid }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedLabel = options.find((o) => o.value === value)?.label ?? placeholder;
  const handleSelect = (option) => {
    onChange({ target: { name, value: option.value } });
    setIsOpen(false);
  };

  return (
    <div className={`custom-select ${isOpen ? 'is-open' : ''} ${className || ''}`} ref={containerRef}>
      <button
        type="button"
        className="custom-select__trigger"
        onClick={() => setIsOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby={`${id}-label`}
        id={id}
        aria-invalid={ariaInvalid}
      >
        <span className={!value ? 'custom-select__placeholder' : ''}>{selectedLabel}</span>
        <span className="custom-select__chevron" aria-hidden>▼</span>
      </button>
      <div
        className="custom-select__dropdown"
        role="listbox"
        aria-label="Select country"
        hidden={!isOpen}
      >
        <ul className="custom-select__list">
          <li
            role="option"
            aria-selected={!value}
            className={`custom-select__option ${!value ? 'is-selected' : ''}`}
            onClick={() => handleSelect({ value: '', label: placeholder })}
          >
            {placeholder}
          </li>
          {options.map((opt) => (
            <li
              key={opt.value}
              role="option"
              aria-selected={value === opt.value}
              className={`custom-select__option ${value === opt.value ? 'is-selected' : ''}`}
              onClick={() => handleSelect(opt)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      </div>
      <input type="hidden" name={name} value={value} />
    </div>
  );
}
