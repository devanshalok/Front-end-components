import React, { useState } from "react";

export default function App() {
  const initialData = [
    { parent: "Parent 1", children: ["Child 1.1", "Child 1.2", "Child 1.3"] },
    { parent: "Parent 2", children: ["Child 2.1", "Child 2.2", "Child 2.3"] },
    { parent: "Parent 3", children: ["Child 3.1", "Child 3.2", "Child 3.3"] }
  ];

  const [checkboxes, setCheckboxes] = useState(
    initialData.map(group => ({
      parent: { label: group.parent, checked: false, indeterminate: false },
      children: group.children.map(label => ({ label, checked: false }))
    }))
  );

  const handleParentChange = (groupIndex) => {
    setCheckboxes(prev => {
      const newState = [...prev];
      const parent = newState[groupIndex].parent;
      const newChecked = !parent.checked;
      parent.checked = newChecked;
      parent.indeterminate = false;
      newState[groupIndex].children = newState[groupIndex].children.map(child => ({
        ...child,
        checked: newChecked
      }));
      return newState;
    });
  };

  const handleChildChange = (groupIndex, childIndex) => {
    setCheckboxes(prev => {
      const newState = [...prev];
      const children = newState[groupIndex].children;
      children[childIndex].checked = !children[childIndex].checked;

      const allChecked = children.every(c => c.checked);
      const someChecked = children.some(c => c.checked);

      newState[groupIndex].parent.checked = allChecked;
      newState[groupIndex].parent.indeterminate = !allChecked && someChecked;

      return newState;
    });
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: 20 }}>
      <h1>Nested Checkboxes</h1>
      {checkboxes.map((group, groupIndex) => (
        <div key={group.parent.label} style={{ marginBottom: 15 }}>
          <label>
            <input
              type="checkbox"
              checked={group.parent.checked}
              ref={el => el && (el.indeterminate = group.parent.indeterminate)}
              onChange={() => handleParentChange(groupIndex)}
            />{" "}
            {group.parent.label}
          </label>
          <div style={{ marginLeft: 20, marginTop: 5 }}>
            {group.children.map((child, childIndex) => (
              <div key={child.label}>
                <label>
                  <input
                    type="checkbox"
                    checked={child.checked}
                    onChange={() => handleChildChange(groupIndex, childIndex)}
                  />{" "}
                  {child.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
