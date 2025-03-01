// const BurgerOpen = (props) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width={28}
//     height={28}
//     fill="none"
//     {...props}
//   >
//     <path
//       stroke="#686868"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M3.5 14h21m-21-7h21m-14 14h14"
//     />
//   </svg>
// );

const BurgerOpen = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 50 50"
    {...props}
  >
    <path fill="#686868" d="M0 7.5v5h50v-5Zm0 15v5h50v-5Zm0 15v5h50v-5Z" />
  </svg>
);
export default BurgerOpen;
