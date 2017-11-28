
export function applyFilter(category, text) {
  return { 
    type: 'APPLY_FILTER', 
    category,    
    text
   }
}
  