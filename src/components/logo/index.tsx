import { SVGProps } from "react";

type Props = {
    theme?: string;
};

const Logo = ({ theme, ...rest }: Props & SVGProps<SVGSVGElement>) => {
    return (
        <svg
            {...rest}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 428 112"
        >
            <path
                stroke={theme === "light" ? "#27272A" : "#E4E4E7"}
                strokeWidth="6"
                d="M81.393 12.515H121.5L107 57M81.393 12.515L56.023 57H107M81.393 12.515L31.5 100M107 57H5.5M109 56c0 29.271-23.729 53-53 53S3 85.271 3 56 26.729 3 56 3s53 23.729 53 53z"
            ></path>
            <path
                fill={theme === "light" ? "#27272A" : "#E4E4E7"}
                d="M124.812 75V31.364h18.836c3.238 0 6.072.639 8.501 1.917 2.429 1.279 4.318 3.075 5.668 5.39 1.349 2.316 2.024 5.022 2.024 8.119 0 3.125-.696 5.83-2.088 8.118-1.378 2.287-3.317 4.048-5.817 5.284-2.486 1.236-5.391 1.853-8.714 1.853h-11.25v-9.204h8.863c1.392 0 2.578-.242 3.558-.724.995-.498 1.755-1.2 2.28-2.11.54-.909.81-1.981.81-3.217 0-1.25-.27-2.316-.81-3.196-.525-.895-1.285-1.577-2.28-2.046-.98-.483-2.166-.724-3.558-.724h-4.176V75h-11.847zm47.2.511c-2.088 0-3.934-.34-5.539-1.022-1.591-.696-2.841-1.748-3.75-3.154-.909-1.406-1.364-3.196-1.364-5.37 0-1.789.305-3.316.916-4.58.611-1.279 1.463-2.322 2.557-3.132 1.094-.81 2.365-1.428 3.814-1.854 1.463-.426 3.04-.703 4.73-.83 1.832-.143 3.303-.313 4.411-.512 1.122-.213 1.931-.504 2.429-.874.497-.383.745-.888.745-1.513v-.085c0-.852-.326-1.505-.98-1.96-.653-.455-1.491-.682-2.514-.682-1.122 0-2.038.249-2.749.746-.696.483-1.115 1.229-1.257 2.237h-10.824a11.154 11.154 0 011.897-5.497c1.136-1.69 2.791-3.04 4.964-4.048 2.174-1.023 4.887-1.534 8.139-1.534 2.344 0 4.446.277 6.307.83 1.861.54 3.445 1.3 4.752 2.28 1.306.966 2.301 2.103 2.983 3.41.696 1.292 1.044 2.698 1.044 4.218V75h-10.995v-4.602h-.255c-.654 1.221-1.449 2.209-2.387 2.961A8.777 8.777 0 01175.912 75c-1.179.34-2.479.511-3.9.511zm3.836-7.414c.895 0 1.733-.185 2.514-.554a4.848 4.848 0 001.939-1.598c.497-.696.746-1.542.746-2.536v-2.727c-.313.128-.647.248-1.002.362a20.062 20.062 0 01-2.344.597c-.426.085-.873.163-1.342.234-.909.142-1.655.376-2.237.703-.568.313-.995.703-1.279 1.172a2.955 2.955 0 00-.404 1.534c0 .91.319 1.605.958 2.088.64.483 1.456.725 2.451.725zm34.256-36.733V75h-11.762V31.364h11.762zm21.674 44.233c-3.494 0-6.506-.668-9.034-2.003-2.514-1.35-4.453-3.281-5.817-5.796-1.349-2.528-2.024-5.554-2.024-9.076 0-3.381.682-6.336 2.046-8.864 1.363-2.528 3.288-4.496 5.774-5.902 2.485-1.406 5.419-2.11 8.799-2.11 2.472 0 4.709.384 6.712 1.151s3.715 1.882 5.135 3.345c1.42 1.45 2.514 3.21 3.281 5.284.767 2.074 1.151 4.41 1.151 7.01v2.728h-29.233v-6.478h18.409c-.014-.937-.256-1.761-.725-2.471a4.611 4.611 0 00-1.853-1.684c-.767-.411-1.641-.617-2.621-.617-.952 0-1.825.206-2.621.617a4.953 4.953 0 00-1.917 1.663c-.469.71-.718 1.54-.746 2.492v6.989c0 1.051.22 1.989.66 2.813a4.795 4.795 0 001.897 1.938c.824.47 1.818.703 2.983.703.809 0 1.548-.113 2.216-.34a4.993 4.993 0 001.747-.98c.483-.44.838-.966 1.065-1.577h10.739c-.37 2.272-1.243 4.247-2.621 5.923-1.378 1.662-3.203 2.955-5.476 3.878-2.258.909-4.9 1.364-7.926 1.364zm40.339-33.324v8.522h-21.562v-8.522h21.562zm-17.386-7.841h11.761v30.042c0 .455.078.838.235 1.151.156.298.397.526.724.682.327.142.746.213 1.257.213.355 0 .767-.043 1.236-.128a17.04 17.04 0 001.065-.213l1.705 8.267c-.526.156-1.279.348-2.259.575-.966.228-2.116.377-3.451.448-2.699.142-4.965-.135-6.797-.831-1.833-.71-3.211-1.826-4.134-3.345-.923-1.52-1.371-3.424-1.342-5.71V34.431zm41.703 7.84v8.523h-21.563v-8.522h21.563zm-17.387-7.84h11.762v30.042c0 .455.078.838.234 1.151.156.298.398.526.724.682.327.142.746.213 1.258.213.355 0 .767-.043 1.235-.128.483-.085.838-.156 1.066-.213l1.704 8.267c-.525.156-1.278.348-2.258.575-.966.228-2.117.377-3.452.448-2.699.142-4.965-.135-6.797-.831-1.832-.71-3.21-1.826-4.133-3.345-.924-1.52-1.371-3.424-1.343-5.71V34.431zm37.516 41.165c-3.494 0-6.505-.668-9.034-2.003-2.514-1.35-4.453-3.281-5.817-5.796-1.349-2.528-2.024-5.554-2.024-9.076 0-3.381.682-6.336 2.046-8.864 1.363-2.528 3.288-4.496 5.774-5.902 2.486-1.406 5.419-2.11 8.8-2.11 2.471 0 4.708.384 6.711 1.151s3.715 1.882 5.135 3.345c1.421 1.45 2.514 3.21 3.281 5.284.767 2.074 1.151 4.41 1.151 7.01v2.728h-29.233v-6.478h18.409c-.014-.937-.256-1.761-.724-2.471a4.62 4.62 0 00-1.854-1.684c-.767-.411-1.641-.617-2.621-.617-.951 0-1.825.206-2.621.617a4.953 4.953 0 00-1.917 1.663c-.469.71-.717 1.54-.746 2.492v6.989c0 1.051.22 1.989.661 2.813a4.786 4.786 0 001.896 1.938c.824.47 1.818.703 2.983.703.81 0 1.548-.113 2.216-.34a4.984 4.984 0 001.747-.98c.483-.44.838-.966 1.065-1.577h10.739c-.369 2.272-1.243 4.247-2.621 5.923-1.378 1.662-3.203 2.955-5.476 3.878-2.258.909-4.9 1.364-7.926 1.364z"
            ></path>
            <path
                fill={theme === "light" ? "#4F46E5" : "#818cf8"}
                d="M337.215 75V31.364h18.835c3.239 0 6.073.639 8.501 1.917 2.429 1.279 4.319 3.075 5.668 5.39 1.35 2.316 2.024 5.022 2.024 8.119 0 3.125-.696 5.83-2.088 8.118-1.378 2.287-3.317 4.048-5.817 5.284-2.485 1.236-5.39 1.853-8.714 1.853h-11.25v-9.204h8.864c1.392 0 2.578-.242 3.558-.724.994-.498 1.754-1.2 2.28-2.11.539-.909.809-1.981.809-3.217 0-1.25-.27-2.316-.809-3.196-.526-.895-1.286-1.577-2.28-2.046-.98-.483-2.166-.724-3.558-.724h-4.177V75h-11.846zm39.545 0V42.273h11.762V75H376.76zm5.881-36.136c-1.591 0-2.955-.526-4.091-1.577-1.136-1.051-1.704-2.315-1.704-3.793 0-1.477.568-2.741 1.704-3.792 1.136-1.051 2.5-1.577 4.091-1.577 1.605 0 2.969.526 4.091 1.577 1.136 1.05 1.704 2.315 1.704 3.792 0 1.478-.568 2.742-1.704 3.793-1.122 1.051-2.486 1.577-4.091 1.577zm22.015 3.409l4.773 10.142 5.028-10.142h11.677l-8.779 16.363L426.56 75h-11.591l-5.54-10.398L404.06 75h-11.762l9.29-16.364-8.693-16.363h11.761z"
            ></path>
        </svg>
    );
};

export default Logo;
