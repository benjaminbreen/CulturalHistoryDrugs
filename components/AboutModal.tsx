import React from 'react';
import { X, BookOpen, Users, Lightbulb, AlertCircle, Sparkles, Code2 } from 'lucide-react';
import { useEscapeKey } from '../hooks/useClickOutside';

interface AboutModalProps {
  onClose: () => void;
}

const AboutModal: React.FC<AboutModalProps> = ({ onClose }) => {
  useEscapeKey(onClose, true);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      <div className="relative bg-[#fdfaf6] w-full max-w-4xl max-h-[90vh] rounded-lg shadow-2xl flex flex-col overflow-hidden border-2 border-stone-200">

        {/* Header */}
        <div className="bg-gradient-to-r from-amber-800 to-amber-900 p-6 text-white">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-3xl font-bold font-serif mb-2">About This Site</h2>
              <p className="text-amber-100 text-sm">Note: This is a prototype intended for HIS151B students as an example! </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content - Scrollable */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-6">

          {/* Project Overview */}
          <section className="bg-amber-50 p-6 rounded-lg border border-amber-200">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-5 h-5 text-amber-700" />
              <h3 className="text-xl font-bold font-serif text-stone-900">Project Overview</h3>
            </div>
            <p className="text-stone-700 leading-relaxed">
              This digital archive was created by <strong>Benjamin Breen</strong> as an example of a "digital artifact"
              assignment for <strong>History 151B: Drugs in World History</strong> at the University of California,
              Santa Cruz. It demonstrates how students might curate and contextualize primary sources from the period
              1880-1950 to explore the global history of psychoactive substances.
            </p>
          </section>

          {/* AI Collaboration */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <Code2 className="w-5 h-5 text-indigo-700" />
              <h3 className="text-xl font-bold font-serif text-stone-900">AI Collaboration & Methodology</h3>
            </div>
            <div className="space-y-3 text-stone-700 leading-relaxed">
              <p>
                <strong className="text-indigo-900">Code Development:</strong> The application code was written collaboratively
                by <strong>Gemini Flash 3.0</strong> and <strong>Claude Sonnet 4.5</strong>, with human direction and refinement.
              </p>
              <p>
                <strong className="text-indigo-900">Source Selection:</strong> A hybrid process where Gemini Flash 3.0 initially
                searched the web to identify appropriate archival sources, followed by extensive human editing, removal of unsuitable
                entries, and suggestions for new materials by Breen. Some links remain broken as this is a prototype intended as a classroom example. 
              </p>
              <p>
                <strong className="text-indigo-900">Curatorial Text:</strong> The historical analysis and descriptions were
                primarily AI-generated with oversight and editing by Breen. <span className="font-semibold text-red-800">
                Important: For a final project in an actual class, all analytical text would need to be entirely human-written.</span> In
                a future version of this site intended for public scholarly use, all curatorial content will be rewritten by human experts.
              </p>
            </div>
          </section>

          {/* Critical Reflection */}
          <section className="bg-red-50 p-6 rounded-lg border border-red-200">
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle className="w-5 h-5 text-red-700" />
              <h3 className="text-xl font-bold font-serif text-stone-900">AI Limitations & Biases</h3>
            </div>
            <p className="text-stone-700 leading-relaxed mb-3">
              If this were a real assignment, an accompanying <strong>annotated bibliography and design document</strong> would
              detail the failure points of the AI's selections, including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-stone-700 ml-4">
              <li><strong>Language Bias:</strong> A pronounced tendency to prioritize English-language sources over materials
              in other languages, limiting the truly "global" scope of the archive.</li>
              <li><strong>Geographic Bias:</strong> Overrepresentation of American and British sources, with less coverage of
              Latin America, Africa, Asia, and other regions.</li>
              <li><strong>Opium Tunnel Vision:</strong> An excessive focus on opium to the exclusion of other drugs (cocaine,
              cannabis, peyote, alcohol) that had equally significant global footprints during this period.</li>
              <li><strong>Archival Access Inequities:</strong> Preference for digitized materials from well-funded institutions
              (Library of Congress, Wellcome Collection) over materials that may not yet be digitized.</li>
            </ul>
          </section>

          {/* Design Features */}
          <section>
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="w-5 h-5 text-amber-700" />
              <h3 className="text-xl font-bold font-serif text-stone-900">Design Features</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-stone-100 p-4 rounded border border-stone-300">
                <h4 className="font-bold text-stone-900 mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-indigo-600" />
                  Light Table (Comparator)
                </h4>
                <p className="text-sm text-stone-700">
                  Allows side-by-side comparison of two sources with optional AI-generated analysis of connections and themes.
                  This feature encourages students to think critically about relationships between different materials, time periods,
                  and geographic contexts. The design document would explain the pedagogical rationale: learning happens through
                  comparison and contrast.
                </p>
              </div>
              <div className="bg-indigo-50 p-4 rounded border border-indigo-200">
                <h4 className="font-bold text-stone-900 mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4 text-indigo-700" />
                  Create Your Own Exhibition (Most Important!)
                </h4>
                <p className="text-sm text-stone-700 mb-2">
                  The exhibition feature is <strong>the most pedagogically significant element</strong> of this digital artifact.
                  Students can select 3-10 sources, add their own curatorial annotations, and create custom guided exhibitions
                  with thematic color schemes.
                </p>
                <p className="text-sm text-stone-700">
                  <strong>Pedagogical Application:</strong> If this were a real final project assignment, students would demonstrate
                  their command of the material by creating an original exhibition and sharing it with the class. This shifts the
                  student from passive consumer of historical narratives to active curator and interpreter—a key goal of digital
                  humanities pedagogy.
                </p>
              </div>
            </div>
          </section>

          {/* Footer Note */}
          <section className="border-t border-stone-200 pt-6 text-sm text-stone-600">
            <p className="italic">
              This is a prototype demonstration project. Future iterations would include more rigorous source vetting,
              expanded geographic coverage, human-written scholarly analysis, and potentially collaborative features
              allowing students to comment on and discuss each other's exhibitions.
               Go banana slugs 🐌
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default AboutModal;
