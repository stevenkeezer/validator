import { SetStateAction, useEffect, useState } from 'react';

import { ExclamationCircleIcon } from '@heroicons/react/solid';

export default function InputForm() {
  const [keyword, setKeyword] = useState('');
  const [result, setResult] = useState('');

  function isBalanced(str: string) {
    const brackets = {
      ')': '(',
      '}': '{',
      ']': '[',
    } as { [key: string]: string };

    const stack: (string | number)[] = [];

    for (let i = 0; i < str.length; i += 1) {
      const char = str[i] as keyof typeof brackets;

      if (char === '(' || char === '[' || char === '{') {
        stack.push(char);
      } else if (stack[stack.length - 1] === brackets[char]) {
        stack.pop();
      } else return false;
    }

    setResult(stack.length === 0 ? 'Balanced' : 'Not Balanced');
    return !stack.length;
  }

  const handleChange = (e: { target: { value: SetStateAction<string> } }) => {
    setKeyword(e.target.value);
    isBalanced(keyword);
  };

  useEffect(() => {
    isBalanced(keyword);
  }, [keyword]);

  useEffect(() => {
    if (keyword === '') {
      setResult('');
    }
  }, [keyword]);

  return (
    <div>
      <div className="relative rounded-md shadow-sm">
        <input
          type="email"
          name="email"
          autoComplete="off"
          id="email"
          onChange={handleChange}
          className="block pl-[35%] w-full  h-16 shadow p-4 pr-10 border-red-300 text-red-900 placeholder-gray-500 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-lg rounded-md"
          placeholder="Enter your sentence here"
          value={keyword}
          aria-invalid="true"
          aria-describedby="email-error"
        />
        {result !== '' && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            {result === 'Not Balanced' ? (
              <ExclamationCircleIcon
                className="h-5 w-5 text-red-500"
                aria-hidden="true"
              />
            ) : (
              <ExclamationCircleIcon
                className="h-5 w-5 text-green-500"
                aria-hidden="true"
              />
            )}
          </div>
        )}
      </div>
      <div className="h-10">
        {result !== '' ? (
          <p
            className={`mt-2 text-sm ${
              result === 'Balanced' ? 'text-green-500' : 'text-red-600'
            } text-center`}
            id="email-error"
          >
            {`Your brackets and parenthesis are ${result}`}
          </p>
        ) : null}
      </div>
    </div>
  );
}
