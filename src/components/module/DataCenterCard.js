import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

function DataCenterCard() {
  const services = [
    { name: 'auditd.service', loaded: true, running: true, sub: true },
    { name: 'chronyd.service', loaded: true, running: true, sub: true },
    { name: 'dbus.service', loaded: true, running: true, sub: true },
    { name: 'firewalld.service', loaded: true, running: false, sub: false },
    { name: 'getty@tty1.service', loaded: true, running: false, sub: false },
    { name: 'httpd.service', loaded: false, running: false, sub: false },
  ];

  const info = {
    ip: '213.239.194.252',
    ftp: 's17.linxv.com',
    mail: 's17.linxv.com',
    port: '59184',
    dns: 'ns1.cyberpeople.com',
  };

  return (
    <div className="max-w-sm w-full bg-white shadow-lg rounded-2xl p-6 space-y-6">
      <h3 className="text-xl font-semibold text-zinc-800">Data Center</h3>
      <h2 className="text-2xl font-bold text-indigo-700">{info.ip}</h2>

      {/* Services Table */}
      <div className="text-sm text-zinc-600">
        <div className="grid grid-cols-4 font-semibold mb-2">
          <span>Service</span>
          <span className="text-center">Loaded</span>
          <span className="text-center">Running</span>
          <span className="text-center">Sub</span>
        </div>
        {services.map((s, idx) => (
          <div key={idx} className="grid grid-cols-4 py-1 items-center">
            <span>{s.name}</span>
            {[s.loaded, s.running, s.sub].map((ok, i) => (
              <span key={i} className="flex justify-center">
                {ok ? (
                  <FaCheck className="text-green-500 w-4 h-4" />
                ) : (
                  <FaTimes className="text-red-500 w-4 h-4" />
                )}
              </span>
            ))}
          </div>
        ))}
      </div>
      {/* Info Section */}
      <div className="text-sm space-y-1 text-zinc-700">
        <div><span className="font-semibold">Server IP:</span> {info.ip}</div>
        <div><span className="font-semibold">FTP:</span> {info.ftp}</div>
        <div><span className="font-semibold">Mail Server:</span> {info.mail}</div>
        <div><span className="font-semibold">SSH Port:</span> {info.port}</div>
        <div><span className="font-semibold">DNS:</span> {info.dns}</div>
      </div>
    </div>
  );
}

export default DataCenterCard;
