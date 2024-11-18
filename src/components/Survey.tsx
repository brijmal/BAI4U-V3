import React, { useState } from 'react';
import { ClipboardCheck } from 'lucide-react';

interface SurveyProps {
  onSubmit: () => void;
}

interface FormData {
  ownerName: string;
  ownerMobile: string;
  ownerAddress: string;
  reason: string;
  otherReason: string;
  maidName: string;
  maidMobile: string;
}

function Survey({ onSubmit }: SurveyProps) {
  const [formData, setFormData] = useState<FormData>({
    ownerName: '',
    ownerMobile: '',
    ownerAddress: '',
    reason: '',
    otherReason: '',
    maidName: '',
    maidMobile: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.ownerName) newErrors.ownerName = 'Name is required';
    if (!formData.ownerMobile || !/^\d{10}$/.test(formData.ownerMobile)) {
      newErrors.ownerMobile = 'Valid 10-digit mobile number is required';
    }
    if (!formData.ownerAddress) newErrors.ownerAddress = 'Address is required';
    if (!formData.reason) newErrors.reason = 'Please select a reason';
    if (formData.reason === 'other' && !formData.otherReason) {
      newErrors.otherReason = 'Please specify the reason';
    }
    if (!formData.maidName) newErrors.maidName = 'Maid name is required';
    if (!formData.maidMobile || !/^\d{10}$/.test(formData.maidMobile)) {
      newErrors.maidMobile = 'Valid 10-digit mobile number is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit();
    }
  };

  return (
    <div className="card">
      <div className="flex items-center justify-center mb-6">
        <ClipboardCheck size={36} className="text-white mr-2" />
        <h2 className="text-2xl font-bold">Maid Service Survey</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="text"
            placeholder="Owner Name"
            className="input-field"
            value={formData.ownerName}
            onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
          />
          {errors.ownerName && <p className="text-red-300 text-sm mt-1">{errors.ownerName}</p>}
        </div>

        <div>
          <input
            type="tel"
            placeholder="Owner Mobile Number"
            className="input-field"
            value={formData.ownerMobile}
            onChange={(e) => setFormData({ ...formData, ownerMobile: e.target.value })}
          />
          {errors.ownerMobile && <p className="text-red-300 text-sm mt-1">{errors.ownerMobile}</p>}
        </div>

        <div>
          <textarea
            placeholder="Complete Residential Address"
            className="input-field min-h-[100px]"
            value={formData.ownerAddress}
            onChange={(e) => setFormData({ ...formData, ownerAddress: e.target.value })}
          />
          {errors.ownerAddress && <p className="text-red-300 text-sm mt-1">{errors.ownerAddress}</p>}
        </div>

        <div>
          <p className="mb-3">Why are you not happy with your current maid?</p>
          <div className="radio-group">
            {['Not punctual', 'Not clean', 'Behaviour issues', 'Asking for raise', 'Other'].map((option) => (
              <label key={option} className="radio-option">
                <input
                  type="radio"
                  name="reason"
                  value={option.toLowerCase()}
                  checked={formData.reason === option.toLowerCase()}
                  onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
          </div>
          {formData.reason === 'other' && (
            <input
              type="text"
              placeholder="Please specify"
              className="input-field mt-2"
              value={formData.otherReason}
              onChange={(e) => setFormData({ ...formData, otherReason: e.target.value })}
            />
          )}
          {errors.reason && <p className="text-red-300 text-sm mt-1">{errors.reason}</p>}
        </div>

        <div>
          <input
            type="text"
            placeholder="Maid Name"
            className="input-field"
            value={formData.maidName}
            onChange={(e) => setFormData({ ...formData, maidName: e.target.value })}
          />
          {errors.maidName && <p className="text-red-300 text-sm mt-1">{errors.maidName}</p>}
        </div>

        <div>
          <input
            type="tel"
            placeholder="Maid Mobile Number"
            className="input-field"
            value={formData.maidMobile}
            onChange={(e) => setFormData({ ...formData, maidMobile: e.target.value })}
          />
          {errors.maidMobile && <p className="text-red-300 text-sm mt-1">{errors.maidMobile}</p>}
        </div>

        <button type="submit" className="button w-full">
          Submit Survey
        </button>
      </form>
    </div>
  );
}

export default Survey;