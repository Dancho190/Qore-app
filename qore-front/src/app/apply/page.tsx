'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './page.css';

const universities = [
  { value: 'kbtu', label: 'KBTU - Kazakh-British Technical University' },
  { value: 'mnu', label: 'MNU - Modern University' },
  { value: 'kaznu', label: 'KazNU - Al-Farabi Kazakh National University' },
  { value: 'satbayev', label: 'Satbayev University' },
  { value: 'iitu', label: 'IITU - International Information Technologies University' },
  { value: 'nazarbayev', label: 'Nazarbayev University' },
];

const applicationSchema = z.object({
  iin: z.string().min(12, 'IIN must be 12 digits').max(12, 'IIN must be 12 digits').regex(/^\d+$/, 'IIN must contain only numbers'),
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  university: z.enum(['kbtu', 'mnu', 'kaznu', 'satbayev', 'iitu', 'nazarbayev'], {
    required_error: 'Please select a university',
  }),
  program: z.enum(['bachelor', 'master', 'phd'], {
    required_error: 'Please select a program',
  }),
  age: z.number().min(16, 'Age must be at least 16').max(100, 'Age must be less than 100'),
  entScore: z.number().min(0, 'ENT score must be positive').max(140, 'ENT score cannot exceed 140'),
  ielts: z.number().min(0, 'IELTS score must be positive').max(9, 'IELTS score cannot exceed 9').optional(),
  nuet: z.number().min(0, 'NUET score must be positive').max(100, 'NUET score cannot exceed 100').optional(),
  sat: z.number().min(400, 'SAT score must be at least 400').max(1600, 'SAT score cannot exceed 1600').optional(),
  studyType: z.enum(['scholarship', 'paid'], {
    required_error: 'Please select study type',
  }),
}).refine((data) => {
  // NUET is required only for Nazarbayev University
  if (data.university === 'nazarbayev' && !data.nuet) {
    return false;
  }
  return true;
}, {
  message: 'NUET score is required for Nazarbayev University',
  path: ['nuet'],
}).refine((data) => {
  // SAT is required only for Nazarbayev University and KBTU
  if ((data.university === 'nazarbayev' || data.university === 'kbtu') && !data.sat) {
    return false;
  }
  return true;
}, {
  message: 'SAT score is required for Nazarbayev University and KBTU',
  path: ['sat'],
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

export default function ApplyPage() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      studyType: 'scholarship',
    },
  });

  const selectedUniversity = watch('university');

  const onSubmit = async (data: ApplicationFormData) => {
    console.log('Form data:', data);
    console.log('Uploaded files:', uploadedFiles);
    // Here you would typically send the data to your backend
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const pdfFiles = files.filter(file => file.type === 'application/pdf');
    setUploadedFiles(prev => [...prev, ...pdfFiles]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const showNUET = selectedUniversity === 'nazarbayev';
  const showSAT = selectedUniversity === 'nazarbayev' || selectedUniversity === 'kbtu';

  return (
    <div className="apply-page">
      <Header />
      
      <section className="apply-hero">
        <div className="hero-content">
          <h1 className="hero-title">University Application</h1>
          <p className="hero-subtitle">Submit your application to join one of Kazakhstan's leading universities</p>
        </div>
      </section>

      <section className="apply-form-section">
        <div className="section-container">
          <form onSubmit={handleSubmit(onSubmit)} className="application-form">
            {/* Personal Information */}
            <div className="form-section">
              <h2 className="form-section-title">Personal Information</h2>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="iin" className="form-label">
                    IIN (Individual Identification Number) <span className="required">*</span>
                  </label>
                  <input
                    id="iin"
                    type="text"
                    {...register('iin')}
                    className={`form-input ${errors.iin ? 'error' : ''}`}
                    placeholder="Enter 12-digit IIN"
                    maxLength={12}
                  />
                  {errors.iin && <span className="error-message">{errors.iin.message}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="firstName" className="form-label">
                    First Name <span className="required">*</span>
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    {...register('firstName')}
                    className={`form-input ${errors.firstName ? 'error' : ''}`}
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && <span className="error-message">{errors.firstName.message}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="lastName" className="form-label">
                    Last Name <span className="required">*</span>
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    {...register('lastName')}
                    className={`form-input ${errors.lastName ? 'error' : ''}`}
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && <span className="error-message">{errors.lastName.message}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="age" className="form-label">
                    Age <span className="required">*</span>
                  </label>
                  <input
                    id="age"
                    type="number"
                    {...register('age', { valueAsNumber: true })}
                    className={`form-input ${errors.age ? 'error' : ''}`}
                    placeholder="Enter your age"
                    min={16}
                    max={100}
                  />
                  {errors.age && <span className="error-message">{errors.age.message}</span>}
                </div>
              </div>
            </div>

            {/* University Selection */}
            <div className="form-section">
              <h2 className="form-section-title">University Selection</h2>
              
              <div className="form-group">
                <label htmlFor="university" className="form-label">
                  Select University <span className="required">*</span>
                </label>
                <select
                  id="university"
                  {...register('university')}
                  className={`form-input form-select ${errors.university ? 'error' : ''}`}
                >
                  <option value="">-- Select University --</option>
                  {universities.map((uni) => (
                    <option key={uni.value} value={uni.value}>
                      {uni.label}
                    </option>
                  ))}
                </select>
                {errors.university && <span className="error-message">{errors.university.message}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="program" className="form-label">
                  Program Level <span className="required">*</span>
                </label>
                <select
                  id="program"
                  {...register('program')}
                  className={`form-input form-select ${errors.program ? 'error' : ''}`}
                >
                  <option value="">-- Select Program --</option>
                  <option value="bachelor">Bachelor's Degree (Бакалавриат)</option>
                  <option value="master">Master's Degree (Магистратура)</option>
                  <option value="phd">PhD / Doctorate (Докторантура)</option>
                </select>
                {errors.program && <span className="error-message">{errors.program.message}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="studyType" className="form-label">
                  Study Type <span className="required">*</span>
                </label>
                <select
                  id="studyType"
                  {...register('studyType')}
                  className={`form-input form-select ${errors.studyType ? 'error' : ''}`}
                >
                  <option value="scholarship">Scholarship (Grant)</option>
                  <option value="paid">Paid (Tuition Fee)</option>
                </select>
                {errors.studyType && <span className="error-message">{errors.studyType.message}</span>}
              </div>
            </div>

            {/* Test Scores */}
            <div className="form-section">
              <h2 className="form-section-title">Test Scores</h2>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="entScore" className="form-label">
                    ENT Score <span className="required">*</span>
                  </label>
                  <input
                    id="entScore"
                    type="number"
                    {...register('entScore', { valueAsNumber: true })}
                    className={`form-input ${errors.entScore ? 'error' : ''}`}
                    placeholder="Enter ENT score (0-140)"
                    min={0}
                    max={140}
                  />
                  {errors.entScore && <span className="error-message">{errors.entScore.message}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="ielts" className="form-label">
                    IELTS Score
                  </label>
                  <input
                    id="ielts"
                    type="number"
                    step="0.5"
                    {...register('ielts', { valueAsNumber: true })}
                    className={`form-input ${errors.ielts ? 'error' : ''}`}
                    placeholder="Enter IELTS score (0-9)"
                    min={0}
                    max={9}
                  />
                  {errors.ielts && <span className="error-message">{errors.ielts.message}</span>}
                </div>
              </div>

              {showNUET && (
                <div className="form-group">
                  <label htmlFor="nuet" className="form-label">
                    NUET Score <span className="required">*</span>
                    <span className="field-note">(Required for Nazarbayev University)</span>
                  </label>
                  <input
                    id="nuet"
                    type="number"
                    {...register('nuet', { valueAsNumber: true })}
                    className={`form-input ${errors.nuet ? 'error' : ''}`}
                    placeholder="Enter NUET score (0-100)"
                    min={0}
                    max={100}
                  />
                  {errors.nuet && <span className="error-message">{errors.nuet.message}</span>}
                </div>
              )}

              {showSAT && (
                <div className="form-group">
                  <label htmlFor="sat" className="form-label">
                    SAT Score <span className="required">*</span>
                    <span className="field-note">(Required for Nazarbayev University and KBTU)</span>
                  </label>
                  <input
                    id="sat"
                    type="number"
                    {...register('sat', { valueAsNumber: true })}
                    className={`form-input ${errors.sat ? 'error' : ''}`}
                    placeholder="Enter SAT score (400-1600)"
                    min={400}
                    max={1600}
                  />
                  {errors.sat && <span className="error-message">{errors.sat.message}</span>}
                </div>
              )}
            </div>

            {/* Document Upload */}
            <div className="form-section">
              <h2 className="form-section-title">Documents</h2>
              
              <div className="form-group">
                <label htmlFor="documents" className="form-label">
                  Upload Documents (PDF only)
                </label>
                <div className="file-upload-area">
                  <input
                    id="documents"
                    type="file"
                    accept=".pdf"
                    multiple
                    onChange={handleFileUpload}
                    className="file-input"
                  />
                  <div className="file-upload-content">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <p>Click to upload or drag and drop</p>
                    <p className="file-upload-hint">PDF files only (max 10MB each)</p>
                  </div>
                </div>

                {uploadedFiles.length > 0 && (
                  <div className="uploaded-files">
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="uploaded-file-item">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="file-name">{file.name}</span>
                        <span className="file-size">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className="remove-file-btn"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="form-actions">
              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-btn"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
