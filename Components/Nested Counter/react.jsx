import React, { useState } from "react";

export default function App() {
  // Initial data structure: each parent has a label and a list of children
  const initialData = [
    { parent: "Parent 1", children: ["Child 1.1", "Child 1.2", "Child 1.3"] },
    { parent: "Parent 2", children: ["Child 2.1", "Child 2.2", "Child 2.3"] },
    { parent: "Parent 3", children: ["Child 3.1", "Child 3.2", "Child 3.3"] }
  ];

  // State: each group stores parent info and child checkboxes
  const [checkboxes, setCheckboxes] = useState(
    initialData.map(group => ({
      parent: { label: group.parent, checked: false, indeterminate: false },
      children: group.children.map(label => ({ label, checked: false }))
    }))
  );

  // Handle when a parent checkbox is toggled
  const handleParentChange = (groupIndex) => {
    setCheckboxes(prev => {
      const newState = [...prev]; // Copy state to update immutably
      const parent = newState[groupIndex].parent;
      const newChecked = !parent.checked; // Toggle parent checked state
      parent.checked = newChecked;
      parent.indeterminate = false; // Parent cannot be indeterminate if manually toggled

      // Update all children to match the parent
      newState[groupIndex].children = newState[groupIndex].children.map(child => ({
        ...child,
        checked: newChecked
      }));
      return newState;
    });
  };

  // Handle when a child checkbox is toggled
  const handleChildChange = (groupIndex, childIndex) => {
    setCheckboxes(prev => {
      const newState = [...prev];
      const children = newState[groupIndex].children;

      // Toggle specific child checkbox
      children[childIndex].checked = !children[childIndex].checked;

      // Check the overall state of children
      const allChecked = children.every(c => c.checked); // true if all children checked
      const someChecked = children.some(c => c.checked); // true if at least one checked

      // Update parent based on children state
      newState[groupIndex].parent.checked = allChecked; // fully checked if all children checked
      newState[groupIndex].parent.indeterminate = !allChecked && someChecked; // partially checked if some children checked

      return newState;
    });
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: 20 }}>
      <h1>Nested Checkboxes</h1>
      {/* Render each parent group */}
      {checkboxes.map((group, groupIndex) => (
        <div key={group.parent.label} style={{ marginBottom: 15 }}>
          <label>
            <input
              type="checkbox"
              checked={group.parent.checked} // Parent checked state
              // Set indeterminate property dynamically
              ref={el => el && (el.indeterminate = group.parent.indeterminate)}
              onChange={() => handleParentChange(groupIndex)}
            />{" "}
            {group.parent.label}
          </label>

          {/* Render child checkboxes with indentation */}
          <div style={{ marginLeft: 20, marginTop: 5 }}>
            {group.children.map((child, childIndex) => (
              <div key={child.label}>
                <label>
                  <input
                    type="checkbox"
                    checked={child.checked} // Child checked state
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
