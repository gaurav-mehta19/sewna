'use client';

import { useState } from 'react';
import { ArrowRight, ArrowLeft, Upload, X, Plus } from 'lucide-react';
import { DesignerData } from './DesignerStudio';
import Image from 'next/image';

interface DesignsUploadStepProps {
  data: DesignerData;
  onUpdate: (data: Partial<DesignerData>) => void;
  onNext: () => void;
  onBack: () => void;
}

interface Design {
  id: string;
  image: string;
  name: string;
  caption: string;
  tags: string[];
}

const DESIGN_TAGS = ['Formal', 'Casual', 'Ethnic', 'Modern', 'Vintage', 'Sustainable'];

export default function DesignsUploadStep({
  data,
  onUpdate,
  onNext,
  onBack,
}: DesignsUploadStepProps) {
  const [editingDesign, setEditingDesign] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const newDesignItem: Design = {
            id: Date.now().toString() + Math.random(),
            image: reader.result as string,
            name: '',
            caption: '',
            tags: [],
          };
          onUpdate({ designs: [...data.designs, newDesignItem] });
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const updateDesign = (id: string, updates: Partial<Design>) => {
    const updatedDesigns = data.designs.map((design) =>
      design.id === id ? { ...design, ...updates } : design
    );
    onUpdate({ designs: updatedDesigns });
  };

  const removeDesign = (id: string) => {
    onUpdate({ designs: data.designs.filter((d) => d.id !== id) });
  };

  const toggleTag = (designId: string, tag: string) => {
    const design = data.designs.find((d) => d.id === designId);
    if (!design) return;

    const newTags = design.tags.includes(tag)
      ? design.tags.filter((t) => t !== tag)
      : [...design.tags, tag];
    
    updateDesign(designId, { tags: newTags });
  };

  return (
    <section className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-black font-poppins mb-4">
            Upload Your Designs
          </h2>
          <p className="text-lg text-gray-600 font-poppins">
            Showcase your best work (up to 10 designs)
          </p>
        </div>

        {/* Upload Zone */}
        <div className="mb-12 animate-fade-in-up animation-delay-100">
          <label className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-2xl cursor-pointer hover:border-[#00b67f] hover:bg-[#00b67f]/5 transition-all group">
            <Upload className="w-12 h-12 text-gray-400 group-hover:text-[#00b67f] mb-3 transition-colors" />
            <span className="text-lg font-medium text-gray-600 group-hover:text-[#00b67f] font-poppins transition-colors">
              Drag & Drop or Click to Upload
            </span>
            <span className="text-sm text-gray-500 mt-1 font-poppins">
              {data.designs.length}/10 designs uploaded
            </span>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageUpload}
              className="hidden"
              disabled={data.designs.length >= 10}
            />
          </label>
        </div>

        {/* Design Grid */}
        {data.designs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up animation-delay-200">
            {data.designs.map((design) => (
              <div
                key={design.id}
                className="group relative bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-[#00b67f] hover:shadow-xl transition-all"
              >
                {/* Image */}
                <div className="relative h-64 bg-gray-100 overflow-hidden">
                  <Image
                    src={design.image}
                    alt={design.name || 'Design'}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button
                      onClick={() => setEditingDesign(editingDesign === design.id ? null : design.id)}
                      className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-gray-100 transition-all font-poppins"
                    >
                      {editingDesign === design.id ? 'Close' : 'Edit Details'}
                    </button>
                  </div>

                  {/* Remove button */}
                  <button
                    onClick={() => removeDesign(design.id)}
                    className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all opacity-0 group-hover:opacity-100"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Details Section */}
                <div className="p-4 space-y-3">
                  {editingDesign === design.id ? (
                    <>
                      <input
                        type="text"
                        value={design.name}
                        onChange={(e) => updateDesign(design.id, { name: e.target.value })}
                        placeholder="Design name"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-[#00b67f] focus:outline-none text-sm font-poppins"
                      />
                      <textarea
                        value={design.caption}
                        onChange={(e) => updateDesign(design.id, { caption: e.target.value })}
                        placeholder="Brief description..."
                        rows={2}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:border-[#00b67f] focus:outline-none text-sm font-poppins resize-none"
                      />
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1">
                        {DESIGN_TAGS.map((tag) => (
                          <button
                            key={tag}
                            onClick={() => toggleTag(design.id, tag)}
                            className={`px-2 py-1 rounded-full text-xs font-medium transition-all font-poppins ${
                              design.tags.includes(tag)
                                ? 'bg-[#00b67f] text-white'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </>
                  ) : (
                    <>
                      <h4 className="font-semibold text-black font-poppins">
                        {design.name || 'Untitled Design'}
                      </h4>
                      {design.caption && (
                        <p className="text-sm text-gray-600 font-poppins line-clamp-2">
                          {design.caption}
                        </p>
                      )}
                      {design.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {design.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-[#00b67f]/10 text-[#00b67f] rounded-full text-xs font-medium font-poppins"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}

            {/* Add New Card */}
            {data.designs.length < 10 && (
              <label className="flex flex-col items-center justify-center h-full min-h-[400px] border-2 border-dashed border-gray-300 rounded-2xl cursor-pointer hover:border-[#00b67f] hover:bg-[#00b67f]/5 transition-all group">
                <Plus className="w-12 h-12 text-gray-400 group-hover:text-[#00b67f] mb-3 transition-colors" />
                <span className="text-sm font-medium text-gray-600 group-hover:text-[#00b67f] font-poppins transition-colors">
                  Add New Design
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </label>
            )}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500 font-poppins">
            No designs uploaded yet. Upload your first design above!
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between mt-12 animate-fade-in-up animation-delay-300">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black border-2 border-gray-300 rounded-full font-medium hover:border-gray-400 transition-all font-poppins"
          >
            <ArrowLeft className="w-5 h-5" />
            Back
          </button>

          <button
            onClick={onNext}
            disabled={data.designs.length === 0}
            className={`inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold transition-all font-poppins ${
              data.designs.length > 0
                ? 'bg-[#00b67f] text-white hover:bg-[#00a070] hover:shadow-xl hover:scale-105'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Continue
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
