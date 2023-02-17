import style from "@/styles/Socials.module.css";

export default function Socials() {
  const linkedinUrl = "https://www.linkedin.com/in/amankumar7080/";
  const instaUrl = "https://www.instagram.com/metalovia/";
  const githubUrl = "https://github.com/Aman7080";

  return (
    <div className={style.socials}>
      <a href={linkedinUrl} target="_blank" rel="noreferrer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="48"
          height="48"
          viewBox="0 0 64 64"
        >
          <circle cx="32" cy="32" r="23" fill="#9c34c2"></circle>
          <ellipse cx="32" cy="61" opacity=".3" rx="19" ry="3"></ellipse>
          <path
            fill="#fff"
            d="M32,14c2.577,0,4.674-1.957,4.946-4.461C35.352,9.19,33.699,9,32,9 C19.297,9,9,19.297,9,32c0,1.699,0.19,3.352,0.539,4.946C12.044,36.674,14,34.577,14,32C14,22.075,22.075,14,32,14z"
            opacity=".3"
          ></path>
          <path
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="3"
            d="M15.047,23.427c1.878-3.699,4.932-6.705,8.666-8.522"
          ></path>
          <path
            d="M54.461,27.054C51.956,27.326,50,29.423,50,32c0,9.925-8.075,18-18,18 c-2.577,0-4.674,1.957-4.946,4.461C28.648,54.81,30.301,55,32,55c12.703,0,23-10.297,23-23C55,30.301,54.81,28.648,54.461,27.054z"
            opacity=".15"
          ></path>
          <g>
            <path
              fill="#a0effe"
              d="M21.321,27.071h3.286c0.454,0,0.821,0.368,0.821,0.821v14.786c0,0.454-0.368,0.821-0.821,0.821 h-3.286c-0.454,0-0.821-0.368-0.821-0.821V27.893C20.5,27.439,20.868,27.071,21.321,27.071z"
            ></path>
            <path
              fill="#a0effe"
              d="M22.95,25.429h-0.028c-1.471,0-2.422-1.096-2.422-2.465c0-1.399,0.981-2.463,2.478-2.463 c1.499,0,2.423,1.065,2.45,2.463C25.429,24.331,24.477,25.429,22.95,25.429z"
            ></path>
            <path
              fill="#a0effe"
              d="M39.393,43.5c-0.454,0-0.821-0.368-0.821-0.821V34.78c0-2.106-1.174-3.544-3.059-3.544 c-1.438,0-2.217,0.97-2.594,1.907c-0.138,0.335-0.097,1.263-0.097,1.732v7.804c0,0.454-0.368,0.821-0.821,0.821h-3.286 c-0.454,0-0.821-0.368-0.821-0.821V27.893c0-0.454,0.368-0.821,0.821-0.821H32c0.454,0,0.821,0.368,0.821,0.821v1.643 c0.691-1.07,1.91-2.469,4.677-2.469c3.429,0,6,2.298,6,7.112l0.001,8.499c0,0.454-0.368,0.822-0.821,0.822H39.393z"
            ></path>
          </g>
        </svg>
      </a>

      <a href={instaUrl} target="_blank" rel="noreferrer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="48"
          height="48"
          viewBox="0 0 64 64"
        >
          <path
            fill="#9c34c2"
            d="M54,20v24c0,2.25-0.74,4.32-2,5.99V50c-1.69,2.24-4.29,3.75-7.25,3.97C44.51,53.99,44.25,54,44,54H20	c-5.52,0-10-4.48-10-10V20c0-0.25,0.01-0.51,0.03-0.75c0.22-2.96,1.73-5.56,3.97-7.25h0.01c1.67-1.26,3.74-2,5.99-2h24	C49.52,10,54,14.48,54,20z"
          ></path>
          <path
            fill="#bc379c"
            d="M54,29.36V44c0,2.25-0.74,4.32-2,5.99V50c-1.69,2.24-4.29,3.75-7.25,3.97 C44.51,53.99,44.25,54,44,54H20c-5.52,0-10-4.48-10-10V20c0-0.25,0.01-0.51,0.03-0.75c0.22-2.96,1.73-5.56,3.97-7.25h0.01 c1.67-1.26,3.74-2,5.99-2h14.64C42.93,14.29,49.71,21.07,54,29.36z"
          ></path>
          <path
            fill="#dd3975"
            d="M52,49.99V50c-1.69,2.24-4.29,3.75-7.25,3.97C44.51,53.99,44.25,54,44,54H20c-5.52,0-10-4.48-10-10 V20c0-0.25,0.01-0.51,0.03-0.75c0.22-2.96,1.73-5.56,3.97-7.25h0.01C34.99,12.01,51.99,29.01,52,49.99z"
          ></path>
          <path
            fill="#fd3c4f"
            d="M45,50c0,1.34-0.09,2.67-0.25,3.97C44.51,53.99,44.25,54,44,54H20c-5.52,0-10-4.48-10-10V20 c0-0.25,0.01-0.51,0.03-0.75C11.33,19.09,12.66,19,14,19C31.12,19,45,32.88,45,50z"
          ></path>
          <path
            fill="#fe6d42"
            d="M38,50c0,1.36-0.11,2.7-0.34,4H20c-5.52,0-10-4.48-10-10V26.34c1.3-0.23,2.64-0.34,4-0.34 C27.25,26,38,36.75,38,50z"
          ></path>
          <path
            fill="#fe9d36"
            d="M32,50c0,1.37-0.15,2.71-0.46,4H20c-5.52,0-10-4.48-10-10V32.46c1.29-0.31,2.63-0.46,4-0.46 C23.94,32,32,40.06,32,50z"
          ></path>
          <path
            fill="#ffce29"
            d="M25,50c0,1.41-0.27,2.76-0.75,4H20c-5.52,0-10-4.48-10-10v-4.25c1.24-0.48,2.59-0.75,4-0.75 C20.08,39,25,43.92,25,50z"
          ></path>
          <ellipse cx="32" cy="61" opacity=".3" rx="20" ry="3"></ellipse>
          <g>
            <path
              fill="#fff"
              d="M31,15c2.761,0,5-2.238,5-5H20c-5.523,0-10,4.477-10,10v22c2.761,0,5-2.238,5-5V20 c0-2.757,2.243-5,5-5H31z"
              opacity=".3"
            ></path>
            <path
              d="M54,44V22c-2.761,0-5,2.238-5,5v17c0,2.757-2.243,5-5,5H33c-2.761,0-5,2.238-5,5h16 C49.523,54,54,49.523,54,44z"
              opacity=".15"
            ></path>
          </g>
          <path
            fill="#fff"
            d="M14,21.5c-0.829,0-1.5-0.671-1.5-1.5c0-4.136,3.364-7.5,7.5-7.5c0.829,0,1.5,0.671,1.5,1.5	s-0.671,1.5-1.5,1.5c-2.481,0-4.5,2.019-4.5,4.5C15.5,20.829,14.829,21.5,14,21.5z"
          ></path>
          <path
            fill="#fff"
            d="M39.5,48h-15c-4.687,0-8.5-3.813-8.5-8.5v-15c0-4.687,3.813-8.5,8.5-8.5h15	c4.687,0,8.5,3.813,8.5,8.5v15C48,44.187,44.187,48,39.5,48z M24.5,19c-3.033,0-5.5,2.467-5.5,5.5v15c0,3.033,2.467,5.5,5.5,5.5h15	c3.033,0,5.5-2.467,5.5-5.5v-15c0-3.033-2.467-5.5-5.5-5.5H24.5z"
          ></path>
          <path
            fill="#fff"
            d="M32,40c-4.411,0-8-3.589-8-8s3.589-8,8-8s8,3.589,8,8S36.411,40,32,40z M32,27c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S34.757,27,32,27z"
          ></path>
          <circle cx="40.5" cy="23.5" r="2" fill="#fff"></circle>
        </svg>
      </a>
      <a href={githubUrl} target="_blank" rel="noreferrer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="48"
          height="48"
          viewBox="0 0 64 64"
        >
          <circle cx="32" cy="32" r="23" fill="#9c34c2"></circle>
          <ellipse cx="32" cy="61" opacity=".3" rx="19" ry="3"></ellipse>
          <path
            fill="#fff"
            d="M32,14c2.577,0,4.674-1.957,4.946-4.461C35.352,9.19,33.699,9,32,9	C19.297,9,9,19.297,9,32c0,1.699,0.19,3.352,0.539,4.946C12.044,36.674,14,34.577,14,32C14,22.075,22.075,14,32,14z"
            opacity=".3"
          ></path>
          <path
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="3"
            d="M15.047,23.427c1.878-3.699,4.932-6.705,8.666-8.522"
          ></path>
          <path
            fill="#a0effe"
            d="M37.184,43.111c4.556-1.02,7.818-3.645,7.818-9.252c0-2.6-0.787-4.556-1.97-6.011	c-0.273-0.336-0.274-1.056-0.162-1.474c0.281-1.043,0.066-2.404-0.17-3.383c-0.177-0.73-0.94-1.156-1.662-0.949	c-1.707,0.491-3.115,1.466-4.138,2.136c-0.279,0.182-0.602,0.255-0.931,0.203c-1.244-0.197-2.581-0.282-3.964-0.302L32,24.113V24.08	c-1.383,0.02-2.72,0.105-3.964,0.302c-0.329,0.052-0.652-0.021-0.931-0.203c-1.023-0.669-2.431-1.644-4.138-2.136	c-0.721-0.208-1.485,0.219-1.662,0.949c-0.237,0.979-0.451,2.341-0.17,3.383c0.113,0.418,0.112,1.138-0.162,1.474	c-1.183,1.455-1.97,3.41-1.97,6.011c0,5.607,3.261,8.232,7.818,9.252c0.774,0.173,0.843,1.018,0.544,1.753	c-0.236,0.582-0.368,1.009-0.368,1.677v0.315c-0.168,0.046-0.342,0.087-0.53,0.111c-1.142,0.147-1.98,0-2.559-0.343	c-0.58-0.343-1.267-0.909-1.783-1.662c-0.435-0.635-1.375-2.003-3.596-1.949c-0.388-0.01-0.565,0.354-0.516,0.581	c0.044,0.2,0.22,0.516,0.924,0.773c0.706,0.259,1.169,0.788,1.556,1.411c0.431,0.695,0.693,2.143,2.196,3.218	c0.901,0.644,2.078,1.036,2.954,0.996c0.742-0.034,1.355,0.574,1.355,1.317l0.001,1.628c0,0.659-0.603,1.326-1.228,1.21	c1.854,0.624,4.129,0.813,6.229,0.84v-0.047l0.005,0.047c2.1-0.026,4.375-0.216,6.229-0.84c-0.625,0.115-1.228-0.552-1.228-1.21	l0.002-6.396c0-0.668-0.132-1.095-0.368-1.677C36.342,44.13,36.41,43.285,37.184,43.111z"
          ></path>
          <path
            d="M54.461,27.054C51.956,27.326,50,29.423,50,32c0,9.925-8.075,18-18,18	c-2.577,0-4.674,1.957-4.946,4.461C28.648,54.81,30.301,55,32,55c12.703,0,23-10.297,23-23C55,30.301,54.81,28.648,54.461,27.054z"
            opacity=".15"
          ></path>
        </svg>
      </a>
    </div>
  );
}