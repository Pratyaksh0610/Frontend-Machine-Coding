const tabConfig = [
  {
    tabName: "Profile",
    validation(data, err) {
      if (!data["formAge"] || data["formAge"] < 18) {
        err["formAge"] = "ERROR: AGE IS NOT CORRECT";
      }
      if (!data["formEmail"] || data["formEmail"].length < 2) {
        err["formEmail"] = "ERROR: formEmail IS NOT CORRECT";
      }
      return err["formAge"] || err["formEmail"] ? false : true;
    },
    fields: [
      {
        label: "Age i/p",
        type: "number",
        placeholder: "8",
        name: "formAge",
      },
      {
        label: "EMAIL i/p",
        type: "email",
        placeholder: "johnDoe@gmail.com",
        name: "formEmail",
      },
    ],
  },
  {
    tabName: "Interest",
    validation(data, err) {
      // validation logic for interest
    },
    fields: [
      {
        label: "RDR2",
        type: "checkbox",
        name: "RDR2",
      },
      {
        label: "E33",
        type: "checkbox",
        name: "E33",
      },
      {
        label: "SM2",
        type: "checkbox",
        name: "SM2",
      },
      {
        label: "HarryPotter",
        type: "checkbox",
        name: "HarryPotter",
      },
    ],
  },
  {
    tabName: "Settings",
    validation(data, err) {
      //validation logic for settings
    },
    fields: [
      {
        label: "dark",
        type: "radio",
        name: "theme",
        value: "dark",
      },
      {
        label: "light",
        type: "radio",
        name: "theme",
        value: "light",
      },
    ],
  },
];

export default tabConfig;

export const API_URL_PRODUCTS = "https://dummyjson.com/products?limit=0";
export const API_URL_SEARCH = "https://dummyjson.com/recipes/search";

export const PAGE_SIZE_LIMIT = 10;

export const AUTOCOMPLETE_SEARCH_BAR = "Autocomplete_Search_bar";

export const FileStructureData = [
  {
    name: "gradfather",
    isFolder: true,
    id: 1,
    children: [
      {
        name: "parent",
        isFolder: true,
        id: 2,
        children: [
          {
            name: "son",
            isFolder: true,
            children: [
              {
                name: "srcFile",
                isFolder: false,
                children: [],
              },
            ],
          },
          {
            name: "daughter",
            isFolder: true,
            id: 3,
            children: [
              {
                name: "srcFile",
                isFolder: false,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "gradMother",
    isFolder: true,
    id: 4,
    children: [
      {
        name: "parent",
        isFolder: true,
        id: 5,
        children: [
          {
            name: "son",
            isFolder: true,
            id: 6,
            children: [
              {
                name: "srcFile",
                isFolder: false,
                children: [],
              },
            ],
          },
          {
            name: "daughter",
            isFolder: true,
            id: 7,
            children: [
              {
                name: "srcFile",
                isFolder: false,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

export const CheckboxData = [
  {
    name: "gradfather",
    id: 1,
    isChecked: false,
    children: [
      {
        name: "parent",
        isChecked: false,
        id: 2,
        children: [
          {
            name: "son",
            id:3,
            isChecked: false,
            children: [
              {
                name: "srcFile",
                id:4,
                isChecked: false,
                children: [],
              },
            ],
          },
          {
            name: "daughter",
            isChecked: false,
            id: 5,
            children: [
              {
                name: "srcFile",
                id:6,
                isChecked: false,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "gradMother",
    isChecked: false,
    id: 7,
    children: [
      {
        name: "parent",
        isChecked: false,
        id: 8,
        children: [
          {
            name: "son",
            isChecked: false,
            id: 9,
            children: [
              {
                name: "srcFile",
                isChecked: false,
                id: 10,
                children: [],
              },
            ],
          },
          {
            name: "daughter",
            isChecked: false,
            id: 11,
            children: [
              {
                name: "srcFile",
                id:12,
                isChecked: false,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

export const EmployeeData = [
  {
    name: "Thomas",
    address: "Delhi",
    Mobile: 418494838,
    DOB: "2026-01-08T07:30:00.000Z",
    id:1
  },
  {
    name: "David",
    address: "Delhi",
    Mobile: 418494838,
    DOB: "2026-01-08T07:30:00.000Z",
    id:2
  },
  {
    name: "Ravidas",
    address: "Delhi",
    Mobile: 418494838,
    DOB: "2026-01-08T07:30:00.000Z",
    id:3
  },
  {
    name: "Ren",
    address: "Delhi",
    Mobile: 418494838,
    DOB: "2026-01-08T07:30:00.000Z",
    id:4
  },
  {
    name: "Ravidas",
    address: "Delhi",
    Mobile: 418494838,
    DOB: "2026-01-08T07:30:00.000Z",
    id:5
  },
  {
    name: "Ren",
    address: "Delhi",
    Mobile: 418494838,
    DOB: "2026-01-08T07:30:00.000Z",
    id:6
  },
]